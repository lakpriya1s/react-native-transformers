"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextEmbedding = void 0;
require("text-encoding-polyfill");
var _onnxruntimeReactNative = require("onnxruntime-react-native");
var _base = require("./base.js");
/**
 * Class to handle text embedding model on top of onnxruntime
 */
class TextEmbedding extends _base.Base {
  /**
   * Generate embeddings from input tokens
   *
   * @param tokens Input tokens to generate embeddings from
   * @returns Float32Array containing the embedding vector
   */
  async embed(tokens) {
    const feed = this.feed;
    const inputIdsTensor = new _onnxruntimeReactNative.Tensor("int64", BigInt64Array.from(tokens.map(BigInt)), [1, tokens.length]);
    feed.input_ids = inputIdsTensor;

    // Create attention mask (1 for all tokens)
    feed.attention_mask = new _onnxruntimeReactNative.Tensor("int64", BigInt64Array.from({
      length: tokens.length
    }, () => 1n), [1, tokens.length]);
    if (!this.sess) {
      throw new Error("Session is undefined");
    }

    // Run inference to get embeddings
    const outputs = await this.sess.run(feed);

    // The model typically outputs the embeddings as 'last_hidden_state' or 'embeddings'
    // We take the mean of the token embeddings to get a single vector
    const embeddings = outputs.last_hidden_state || outputs.embeddings;
    if (!embeddings) {
      throw new Error("No embedding output found in model outputs");
    }

    // Calculate mean across token dimension (dim 1) to get a single embedding vector
    const data = embeddings.data;
    const [, seqLen, hiddenSize] = embeddings.dims;
    const result = new Float32Array(hiddenSize);
    for (let h = 0; h < hiddenSize; h++) {
      let sum = 0;
      for (let s = 0; s < seqLen; s++) {
        sum += data[s * hiddenSize + h];
      }
      result[h] = sum / seqLen;
    }
    return result;
  }
}
exports.TextEmbedding = TextEmbedding;
//# sourceMappingURL=text-embedding.js.map
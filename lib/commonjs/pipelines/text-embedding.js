"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _transformers = require("@huggingface/transformers");
var _textEmbedding = require("../models/text-embedding.js");
/** Initialization Options for Text Embedding */

// Set up environment for transformers.js tokenizer
_transformers.env.allowRemoteModels = true;
_transformers.env.allowLocalModels = false;

// Declare tokenizer and model
let tokenizer;
const model = new _textEmbedding.TextEmbedding();

// Initialize options with default values
let _options = {
  show_special: false,
  max_tokens: 512,
  // typical max length for embedding models
  fetch: async url => url,
  verbose: false,
  externalData: false,
  executionProviders: ["cpu"]
};

/**
 * Generates embeddings from the input text.
 *
 * @param text - The input text to generate embeddings from.
 * @returns Float32Array containing the embedding vector.
 */
async function embed(text) {
  if (!tokenizer) {
    throw new Error("Tokenizer undefined, please initialize first.");
  }
  const {
    input_ids
  } = await tokenizer(text, {
    return_tensor: false,
    padding: true,
    truncation: true,
    max_length: _options.max_tokens
  });
  return await model.embed(input_ids);
}

/**
 * Loads the model and tokenizer with the specified options.
 *
 * @param model_name - The name of the model to load.
 * @param onnx_path - The path to the ONNX model.
 * @param options - Optional initialization options.
 */
async function init(model_name, onnx_path, options) {
  _options = {
    ..._options,
    ...options
  };
  tokenizer = await _transformers.AutoTokenizer.from_pretrained(model_name);
  await model.load(model_name, onnx_path, _options);
}

/**
 * Releases the resources used by the model.
 */
async function release() {
  await model.release();
}

// Export functions for external use
var _default = exports.default = {
  init,
  embed,
  release
};
//# sourceMappingURL=text-embedding.js.map
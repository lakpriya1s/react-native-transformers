"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _transformers = require("@huggingface/transformers");
var _textGeneration = require("../models/text-generation.js");
/** Initialization Options */

// Set up environment for transformers.js tokenizer
_transformers.env.allowRemoteModels = true;
_transformers.env.allowLocalModels = false;

// Declare tokenizer and model
let tokenizer;
const model = new _textGeneration.TextGeneration();

// Initialize options with default values
let _options = {
  show_special: false,
  max_tokens: 9999,
  fetch: async url => url,
  verbose: false,
  externalData: false,
  executionProviders: ["cpu"]
};

/**
 * Converts tokens to text using the initialized tokenizer.
 *
 * @param tokens - Array of tokens to convert.
 * @param startidx - Starting index for slicing the tokens array.
 * @returns The decoded text.
 */
function token_to_text(tokens, startidx) {
  if (!tokenizer) {
    throw new Error("Tokenizer undefined, please initialize first.");
  }
  return tokenizer.decode(tokens.slice(startidx), {
    skip_special_tokens: !_options.show_special
  });
}

/**
 * Generates text based on the given prompt.
 *
 * @param prompt - The input prompt for text generation.
 * @param callback - Optional callback function to handle intermediate text.
 * @returns The generated text.
 */
async function generate(prompt, callback = () => {}) {
  if (!tokenizer) {
    throw new Error("Tokenizer undefined, please initialize first.");
  }
  const {
    input_ids
  } = await tokenizer(prompt, {
    return_tensor: false,
    padding: true,
    truncation: true
  });

  // Clear caches
  model.initializeFeed();
  let output_text = "";
  const record_output = text => {
    output_text += text;
    return text;
  };
  const output_index = model.outputTokens.length + input_ids.length;
  const output_tokens = await model.generate(input_ids, tokens => {
    callback(record_output(token_to_text(tokens, output_index)));
  }, {
    maxTokens: _options.max_tokens
  });
  callback(record_output(token_to_text(output_tokens, output_index)));
  return output_text;
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
  generate,
  release
};
//# sourceMappingURL=text-generation.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Pipeline = exports.Model = void 0;
var _textGeneration = require("./models/text-generation.js");
var _textEmbedding = require("./models/text-embedding.js");
var _textGeneration2 = _interopRequireDefault(require("./pipelines/text-generation.js"));
var _textEmbedding2 = _interopRequireDefault(require("./pipelines/text-embedding.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Pipeline = exports.Pipeline = {
  TextGeneration: _textGeneration2.default,
  TextEmbedding: _textEmbedding2.default
};
const Model = exports.Model = {
  TextGeneration: _textGeneration.TextGeneration,
  TextEmbedding: _textEmbedding.TextEmbedding
};
var _default = exports.default = {
  Pipeline,
  Model
};
//# sourceMappingURL=index.js.map
"use strict";

import { TextGeneration } from "./models/text-generation.js";
import { TextEmbedding } from "./models/text-embedding.js";
import TextGenerationPipeline from "./pipelines/text-generation.js";
import TextEmbeddingPipeline from "./pipelines/text-embedding.js";
export const Pipeline = {
  TextGeneration: TextGenerationPipeline,
  TextEmbedding: TextEmbeddingPipeline
};
export const Model = {
  TextGeneration,
  TextEmbedding
};
export default {
  Pipeline,
  Model
};
//# sourceMappingURL=index.js.map
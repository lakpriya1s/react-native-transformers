import { LoadOptions } from "../models/base";
/** Initialization Options for Text Embedding */
export interface TextEmbeddingOptions extends LoadOptions {
    /** Shows special tokens in the output. */
    show_special: boolean;
}
/**
 * Generates embeddings from the input text.
 *
 * @param text - The input text to generate embeddings from.
 * @returns Float32Array containing the embedding vector.
 */
declare function embed(text: string): Promise<Float32Array>;
/**
 * Loads the model and tokenizer with the specified options.
 *
 * @param model_name - The name of the model to load.
 * @param onnx_path - The path to the ONNX model.
 * @param options - Optional initialization options.
 */
declare function init(model_name: string, onnx_path: string, options?: Partial<TextEmbeddingOptions>): Promise<void>;
/**
 * Releases the resources used by the model.
 */
declare function release(): Promise<void>;
declare const _default: {
    init: typeof init;
    embed: typeof embed;
    release: typeof release;
};
export default _default;
//# sourceMappingURL=text-embedding.d.ts.map
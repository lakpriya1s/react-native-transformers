import { LoadOptions } from "../models/base";
/** Initialization Options */
export interface InitOptions extends LoadOptions {
    /** Shows special tokens in the output. */
    show_special: boolean;
}
/**
 * Generates text based on the given prompt.
 *
 * @param prompt - The input prompt for text generation.
 * @param callback - Optional callback function to handle intermediate text.
 * @returns The generated text.
 */
declare function generate(prompt: string, callback?: (text: string) => void): Promise<string>;
/**
 * Loads the model and tokenizer with the specified options.
 *
 * @param model_name - The name of the model to load.
 * @param onnx_path - The path to the ONNX model.
 * @param options - Optional initialization options.
 */
declare function init(model_name: string, onnx_path: string, options?: Partial<InitOptions>): Promise<void>;
/**
 * Releases the resources used by the model.
 */
declare function release(): Promise<void>;
declare const _default: {
    init: typeof init;
    generate: typeof generate;
    release: typeof release;
};
export default _default;
//# sourceMappingURL=text-generation.d.ts.map
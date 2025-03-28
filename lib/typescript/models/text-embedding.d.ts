import "text-encoding-polyfill";
import { Base } from "./base";
/**
 * Class to handle text embedding model on top of onnxruntime
 */
export declare class TextEmbedding extends Base {
    /**
     * Generate embeddings from input tokens
     *
     * @param tokens Input tokens to generate embeddings from
     * @returns Float32Array containing the embedding vector
     */
    embed(tokens: bigint[]): Promise<Float32Array>;
}
//# sourceMappingURL=text-embedding.d.ts.map
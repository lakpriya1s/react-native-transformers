import "text-encoding-polyfill";
import { Base } from "./base";
/**
 * Class to handle a large language model on top of onnxruntime
 */
export declare class TextGeneration extends Base {
    outputTokens: bigint[];
    private needPositionIds;
    private stopGeneration;
    initializeFeed(): void;
    /**
     * Generate tokens using greedy search
     *
     * @param tokens Initial tokens
     * @param callback Callback function to handle the generated tokens
     * @param options Generation options
     * @returns Array of generated tokens
     */
    generate(tokens: bigint[], callback: (tokens: bigint[]) => void, options: {
        maxTokens: number;
    }): Promise<bigint[]>;
}
//# sourceMappingURL=text-generation.d.ts.map
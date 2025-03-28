import "text-encoding-polyfill";
import { InferenceSession, Tensor } from "onnxruntime-react-native";
/** Load Options */
export interface LoadOptions {
    /** The maximum number of tokens for text generation.  */
    max_tokens: number;
    /** Enables verbose logging. */
    verbose: boolean;
    /** Indicates if external data is used. */
    externalData: boolean;
    /** Function to fetch external data. */
    fetch: (url: string) => Promise<string>;
    /** List of execution providers for ONNX runtime. */
    executionProviders: InferenceSession.ExecutionProviderConfig[];
}
export declare class Base {
    protected sess?: InferenceSession;
    protected feed: Record<string, Tensor>;
    protected eos: bigint;
    private kv_dims;
    private num_layers;
    private dtype;
    constructor();
    load(model: string, onnx_file: string | undefined, options: LoadOptions): Promise<void>;
    initializeFeed(): void;
    protected argmax(t: Tensor): number;
    protected updateKVCache(feed: Record<string, Tensor>, outputs: InferenceSession.OnnxValueMapType): void;
    release(): Promise<void>;
}
//# sourceMappingURL=base.d.ts.map
import { TextGeneration } from "./models/text-generation";
import { TextEmbedding } from "./models/text-embedding";
export declare const Pipeline: {
    TextGeneration: {
        init: (model_name: string, onnx_path: string, options?: Partial<import("./pipelines/text-generation").InitOptions>) => Promise<void>;
        generate: (prompt: string, callback?: (text: string) => void) => Promise<string>;
        release: () => Promise<void>;
    };
    TextEmbedding: {
        init: (model_name: string, onnx_path: string, options?: Partial<import("./pipelines/text-embedding").TextEmbeddingOptions>) => Promise<void>;
        embed: (text: string) => Promise<Float32Array>;
        release: () => Promise<void>;
    };
};
export declare const Model: {
    TextGeneration: typeof TextGeneration;
    TextEmbedding: typeof TextEmbedding;
};
declare const _default: {
    Pipeline: {
        TextGeneration: {
            init: (model_name: string, onnx_path: string, options?: Partial<import("./pipelines/text-generation").InitOptions>) => Promise<void>;
            generate: (prompt: string, callback?: (text: string) => void) => Promise<string>;
            release: () => Promise<void>;
        };
        TextEmbedding: {
            init: (model_name: string, onnx_path: string, options?: Partial<import("./pipelines/text-embedding").TextEmbeddingOptions>) => Promise<void>;
            embed: (text: string) => Promise<Float32Array>;
            release: () => Promise<void>;
        };
    };
    Model: {
        TextGeneration: typeof TextGeneration;
        TextEmbedding: typeof TextEmbedding;
    };
};
export default _default;
export type * from "./models/base";
export type * from "./models/text-generation";
export type * from "./models/text-embedding";
export type * from "./pipelines/text-generation";
export type * from "./pipelines/text-embedding";
//# sourceMappingURL=index.d.ts.map
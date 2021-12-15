import type {Image} from "./image";

export interface ToolboxEntry {
    name: string;
    keywords: string[];
    images: Image[];
}

// export enum ToolboxType {
//     PLAN = "Plan",
//     DEVELOP = "Develop",
//     CODE = "Code",
//     MODEL = "Model",
//     SHARE = "Share",
//     TEST = "Test",
//     BUILD = "Build",
//     RUN = "Run",
//     PERSIST = "Persist",
//     MOVE = "Move",
//     VERIFY = "Verify"
// }

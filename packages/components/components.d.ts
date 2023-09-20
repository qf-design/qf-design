/**
 * ToDo 这一部分代码后续会被优化成自动生成
 */

import * as components from "./index";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    QfButton: typeof components.Button;
  }
}

export {}
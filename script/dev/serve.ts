import { series, watch } from "gulp";
import path from "path";
import {
  buildComponent,
  buildStyle,
  copyFullStyle,
} from "../build/build-components";
import run from "../utils/run";

const roorDir = path.join(__dirname, "../../");

export default () => {
  console.log("开始文件watch");

  watch(
    ["packages/components/**/*.(ts|vue)"],
    { cwd: roorDir },
    buildComponent,
  );

  watch(
    ["packages/theme-chalk/src/*.less"],
    { cwd: roorDir },
    series(buildStyle, copyFullStyle),
  );

  console.log("运行文档服务");

  run("pnpm run dev:docs");
};

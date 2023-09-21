import { series, parallel, src, dest } from "gulp";
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import run from "./../utils/run";

/**
 * 实现组件组件库打包
 * 全流程
 */

import delPath from "./../utils/delpath";
import { pkgPath, componentPath } from "./../utils/paths";

// 删除旧的包
export const removeDist = () => {
  console.log("删除旧包 😄");
  return delPath(`${pkgPath}/qf-design`);
};

// 打包组件样式
export const buildStyle = async () => {
  console.log("打包组件样式 🤔");
  // 找到组件库下所有的less文件
  return (
    src(`${componentPath}/src/**/style/**.less`)
      // 编译less文件
      .pipe(less())
      // 加前缀
      .pipe(autoprefixer())
      .pipe(dest(`${pkgPath}/qf-design/lib/src`))
      .pipe(dest(`${pkgPath}/qf-design/es/src`))
  );
};

// 打包组件库
export const buildComponent = async () => {
  console.log("打包组件 💪🏻");
  run("pnpm run build", componentPath);
};

export default series(removeDist, parallel(buildStyle, buildComponent));

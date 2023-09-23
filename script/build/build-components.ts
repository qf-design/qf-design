import delPath from "../utils/delpath";
import { series, parallel, src, dest } from "gulp";
import { componentPath, pkgPath } from "../utils/paths";
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";

// 删除旧包
export const removeDist = () => {
  return delPath(`${pkgPath}/qf-design`);
};

// 打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/qf-design/lib/src`))
    .pipe(dest(`${pkgPath}/qf-design/es/src`));
};

/**打包组件 */
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};

export default series(removeDist, parallel(buildStyle, buildComponent));

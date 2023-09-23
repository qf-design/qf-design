import run from "../utils/run";
import { pkgPath } from "../utils/paths";
import { series } from "gulp";
import buildComponent from "../build/build-components";

export const publishComponents = async () => {
  run("release-it", `${pkgPath}/qf-design/`);
};

export default series(buildComponent, publishComponents);

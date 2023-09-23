import { series } from "gulp";
import { docsPath } from "../utils/paths";
import buildComponent from "./build-components";

import run from "../utils/run";

export const buildDocs = async () => {
  run("pnpm run build", docsPath);
};

export default series(buildComponent, buildDocs);

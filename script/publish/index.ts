import run from "../utils/run"
import { pkgPath } from './../utils/paths'
import { series } from 'gulp'
import buildComponents from "../build/build-components"

// 组件库发布
export const publblishComponents = async () => {
  console.log("组件库发布 🚀")
  run('release-it', `${pkgPath}/qf-design/`)
}

export default series(buildComponents, publblishComponents)
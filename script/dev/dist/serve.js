"use strict";
exports.__esModule = true;
var gulp_1 = require("gulp");
var path_1 = require("path");
var build_components_1 = require("../build/build-components");
var run_1 = require("../utils/run");
var roorDir = path_1["default"].join(__dirname, '../../');
exports["default"] = (function () {
    console.log("开始文件watch");
    gulp_1.watch(['packages/components/**/*.(ts|vue)'], { cwd: roorDir }, build_components_1.buildComponent);
    gulp_1.watch(['packages/theme-chalk/src/*.less'], { cwd: roorDir }, gulp_1.series(build_components_1.buildStyle, build_components_1.copyFullStyle));
    console.log("运行文档服务");
    run_1["default"]('pnpm run dev:docs');
});

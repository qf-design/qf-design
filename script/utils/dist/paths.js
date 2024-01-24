"use strict";
exports.__esModule = true;
exports.docsPath = exports.themePath = exports.basePath = exports.pkgPath = exports.componentPath = void 0;
var path_1 = require("path");
//组件库根目录
exports.componentPath = path_1.resolve(__dirname, "../../packages/components/");
//pkg根目录
exports.pkgPath = path_1.resolve(__dirname, "../../packages/");
exports.basePath = path_1.resolve(__dirname, "../../");
exports.themePath = path_1.resolve(__dirname, "../../packages/theme-chalk/");
exports.docsPath = path_1.resolve(__dirname, "../../docs");

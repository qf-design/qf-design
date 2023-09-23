"use strict";
exports.__esModule = true;
var vite_1 = require("vite");
var vite_plugin_dts_1 = require("vite-plugin-dts");
var plugin_vue_1 = require("@vitejs/plugin-vue");
var vite_2 = require("unplugin-vue-define-options/vite");
exports["default"] = vite_1.defineConfig({
    build: {
        //压缩
        //minify: false,
        rollupOptions: {
            //忽略不需要打包的文件
            external: ["vue", /\.less/],
            input: ["index.ts"],
            output: [
                {
                    //打包格式
                    format: "es",
                    //打包后文件名
                    entryFileNames: "[name].mjs",
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    exports: "named",
                    //配置打包根目录
                    dir: "../qf-design/es"
                },
                {
                    //打包格式
                    format: "cjs",
                    //打包后文件名
                    entryFileNames: "[name].js",
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    exports: "named",
                    //配置打包根目录
                    dir: "../qf-design/lib"
                },
            ]
        },
        lib: {
            entry: "./index.ts",
            name: "qf-design"
        }
    },
    plugins: [
        plugin_vue_1["default"](),
        vite_plugin_dts_1["default"]({
            entryRoot: "src",
            outputDir: ["../qf-design/es/src", "../qf-design/lib/src"],
            //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
            tsConfigFilePath: "../../tsconfig.json"
        }),
        vite_2["default"](),
        {
            name: "style",
            generateBundle: function (config, bundle) {
                //这里可以获取打包后的文件目录以及代码code
                var keys = Object.keys(bundle);
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var key = keys_1[_i];
                    var bundler = bundle[key];
                    //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件
                    this.emitFile({
                        type: "asset",
                        fileName: key,
                        source: bundler.code.replace(/\.less/g, ".css")
                    });
                }
            }
        },
    ]
});

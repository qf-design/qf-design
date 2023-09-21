import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite";

export default defineConfig({
  build: {
    rollupOptions: {
      // 忽略打包vue文件
      external: ["vue", /\.less/],
      // 入口文件
      input: ["index.ts"],
      output: [
        {
          // 打包格式
          format: "es",
          // 打包后的文件名
          entryFileNames: "[name].mjs",
          // 让打包目录和我们的项目目录对应
          preserveModules: true,
          exports: "named",
          dir: "../qf-design/es",
        },
        {
          // 打包格式
          format: "cjs",
          // 打包后的文件名
          entryFileNames: "[name].mjs",
          // 让打包目录和我们的项目目录对应
          preserveModules: true,
          exports: "named",
          dir: "../qf-design/lib",
        },
      ],
    },
    lib: {
      entry: "./index.ts",
      name: "qf",
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: "src",
      // .d文件最终打包到哪里
      outputDir: ["../qf-design/es/src", "../qf-design/lib/src"],
      tsConfigFilePath: "../../tsconfig.json",
    }),
    DefineOptions(),
    {
      name: "style",
      generateBundle(config, bundle) {
        // 这里可以获取打包后的文件目录以及代码
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler = bundle[key];
          // rollup 内置方法，将所有输出文件代码中的.less 换成.css 因为我们忽略的less文件，并且样式使我们单独打包的
          this.emitFile({
            type: "asset",
            fileName: key,
            source: (bundler as any).code.replace(/\.less/g, ".css"),
          });
        }
      },
    },
  ],
});

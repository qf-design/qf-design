// vite.config.ts
import { defineConfig } from "file:///Users/wangkai/wangkai/qf/b-hooks/qf-design-test/node_modules/.pnpm/vite@4.4.9_@types+node@20.5.9_less@4.2.0/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/wangkai/wangkai/qf/b-hooks/qf-design-test/node_modules/.pnpm/@vitejs+plugin-vue@4.3.4_vite@4.4.9_vue@3.2.36/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///Users/wangkai/wangkai/qf/b-hooks/qf-design-test/node_modules/.pnpm/vite-plugin-dts@1.4.1_@types+node@20.5.9_vite@4.4.9/node_modules/vite-plugin-dts/dist/index.js";
import DefineOptions from "file:///Users/wangkai/wangkai/qf/b-hooks/qf-design-test/node_modules/.pnpm/unplugin-vue-define-options@1.3.17_vue@3.2.36/node_modules/unplugin-vue-define-options/dist/vite.mjs";
var vite_config_default = defineConfig({
  build: {
    //压缩
    //minify: false,
    rollupOptions: {
      //忽略不需要打包的文件
      external: ["vue", /\.less/, "@qf/utils"],
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
        }
      ]
    },
    lib: {
      entry: "./index.ts",
      name: "qf-design"
    }
  },
  plugins: [
    vue(),
    dts({
      entryRoot: "src",
      outputDir: ["../qf-design/es/src", "../qf-design/lib/src"],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: "../../tsconfig.json"
    }),
    DefineOptions(),
    {
      name: "style",
      generateBundle(config, bundle) {
        const keys = Object.keys(bundle);
        for (const key of keys) {
          const bundler = bundle[key];
          this.emitFile({
            type: "asset",
            fileName: key,
            //文件名名不变
            source: bundler.code.replace(/\.less/g, ".css")
          });
        }
      }
    }
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvd2FuZ2thaS93YW5na2FpL3FmL2ItaG9va3MvcWYtZGVzaWduLXRlc3QvcGFja2FnZXMvY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3dhbmdrYWkvd2FuZ2thaS9xZi9iLWhvb2tzL3FmLWRlc2lnbi10ZXN0L3BhY2thZ2VzL2NvbXBvbmVudHMvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3dhbmdrYWkvd2FuZ2thaS9xZi9iLWhvb2tzL3FmLWRlc2lnbi10ZXN0L3BhY2thZ2VzL2NvbXBvbmVudHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBEZWZpbmVPcHRpb25zIGZyb20gJ3VucGx1Z2luLXZ1ZS1kZWZpbmUtb3B0aW9ucy92aXRlJztcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgLy9cdTUzOEJcdTdGMjlcbiAgICAvL21pbmlmeTogZmFsc2UsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgLy9cdTVGRkRcdTc1NjVcdTRFMERcdTk3MDBcdTg5ODFcdTYyNTNcdTUzMDVcdTc2ODRcdTY1ODdcdTRFRjZcbiAgICAgIGV4dGVybmFsOiBbJ3Z1ZScsIC9cXC5sZXNzLywgJ0BxZi91dGlscyddLFxuICAgICAgaW5wdXQ6IFsnaW5kZXgudHMnXSxcbiAgICAgIG91dHB1dDogW1xuICAgICAgICB7XG4gICAgICAgICAgLy9cdTYyNTNcdTUzMDVcdTY4M0NcdTVGMEZcbiAgICAgICAgICBmb3JtYXQ6ICdlcycsXG4gICAgICAgICAgLy9cdTYyNTNcdTUzMDVcdTU0MEVcdTY1ODdcdTRFRjZcdTU0MERcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5tanMnLFxuICAgICAgICAgIC8vXHU4QkE5XHU2MjUzXHU1MzA1XHU3NkVFXHU1RjU1XHU1NDhDXHU2MjExXHU0RUVDXHU3NkVFXHU1RjU1XHU1QkY5XHU1RTk0XG4gICAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuICAgICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXG4gICAgICAgICAgLy9cdTkxNERcdTdGNkVcdTYyNTNcdTUzMDVcdTY4MzlcdTc2RUVcdTVGNTVcbiAgICAgICAgICBkaXI6ICcuLi9xZi1kZXNpZ24vZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAvL1x1NjI1M1x1NTMwNVx1NjgzQ1x1NUYwRlxuICAgICAgICAgIGZvcm1hdDogJ2NqcycsXG4gICAgICAgICAgLy9cdTYyNTNcdTUzMDVcdTU0MEVcdTY1ODdcdTRFRjZcdTU0MERcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5qcycsXG4gICAgICAgICAgLy9cdThCQTlcdTYyNTNcdTUzMDVcdTc2RUVcdTVGNTVcdTU0OENcdTYyMTFcdTRFRUNcdTc2RUVcdTVGNTVcdTVCRjlcdTVFOTRcbiAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXM6IHRydWUsXG4gICAgICAgICAgZXhwb3J0czogJ25hbWVkJyxcbiAgICAgICAgICAvL1x1OTE0RFx1N0Y2RVx1NjI1M1x1NTMwNVx1NjgzOVx1NzZFRVx1NUY1NVxuICAgICAgICAgIGRpcjogJy4uL3FmLWRlc2lnbi9saWInXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6ICcuL2luZGV4LnRzJyxcbiAgICAgIG5hbWU6ICdxZi1kZXNpZ24nXG4gICAgfVxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgZHRzKHtcbiAgICAgIGVudHJ5Um9vdDogJ3NyYycsXG4gICAgICBvdXRwdXREaXI6IFsnLi4vcWYtZGVzaWduL2VzL3NyYycsICcuLi9xZi1kZXNpZ24vbGliL3NyYyddLFxuICAgICAgLy9cdTYzMDdcdTVCOUFcdTRGN0ZcdTc1MjhcdTc2ODR0c2NvbmZpZy5qc29uXHU0RTNBXHU2MjExXHU0RUVDXHU2NTc0XHU0RTJBXHU5ODc5XHU3NkVFXHU2ODM5XHU3NkVFXHU1RjU1XHU0RTBCLFx1NTk4Mlx1Njc5Q1x1NEUwRFx1OTE0RFx1N0Y2RSxcdTRGNjBcdTRFNUZcdTUzRUZcdTRFRTVcdTU3Mjhjb21wb25lbnRzXHU0RTBCXHU2NUIwXHU1RUZBdHNjb25maWcuanNvblxuICAgICAgdHNDb25maWdGaWxlUGF0aDogJy4uLy4uL3RzY29uZmlnLmpzb24nXG4gICAgfSksXG4gICAgRGVmaW5lT3B0aW9ucygpLFxuICAgIHtcbiAgICAgIG5hbWU6ICdzdHlsZScsXG4gICAgICBnZW5lcmF0ZUJ1bmRsZShjb25maWcsIGJ1bmRsZSkge1xuICAgICAgICAvL1x1OEZEOVx1OTFDQ1x1NTNFRlx1NEVFNVx1ODNCN1x1NTNENlx1NjI1M1x1NTMwNVx1NTQwRVx1NzY4NFx1NjU4N1x1NEVGNlx1NzZFRVx1NUY1NVx1NEVFNVx1NTNDQVx1NEVFM1x1NzgwMWNvZGVcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGJ1bmRsZSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIGNvbnN0IGJ1bmRsZXI6IGFueSA9IGJ1bmRsZVtrZXkgYXMgYW55XTtcbiAgICAgICAgICAvL3JvbGx1cFx1NTE4NVx1N0Y2RVx1NjVCOVx1NkNENSxcdTVDMDZcdTYyNDBcdTY3MDlcdThGOTNcdTUxRkFcdTY1ODdcdTRFRjZjb2RlXHU0RTJEXHU3Njg0Lmxlc3NcdTYzNjJcdTYyMTAuY3NzLFx1NTZFMFx1NEUzQVx1NjIxMVx1NEVFQ1x1NUY1M1x1NjVGNlx1NkNBMVx1NjcwOVx1NjI1M1x1NTMwNWxlc3NcdTY1ODdcdTRFRjZcblxuICAgICAgICAgIHRoaXMuZW1pdEZpbGUoe1xuICAgICAgICAgICAgdHlwZTogJ2Fzc2V0JyxcbiAgICAgICAgICAgIGZpbGVOYW1lOiBrZXksIC8vXHU2NTg3XHU0RUY2XHU1NDBEXHU1NDBEXHU0RTBEXHU1M0Q4XG4gICAgICAgICAgICBzb3VyY2U6IGJ1bmRsZXIuY29kZS5yZXBsYWNlKC9cXC5sZXNzL2csICcuY3NzJylcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThYLFNBQVMsb0JBQW9CO0FBQzNaLE9BQU8sU0FBUztBQUNoQixPQUFPLFNBQVM7QUFFaEIsT0FBTyxtQkFBbUI7QUFDMUIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBO0FBQUE7QUFBQSxJQUdMLGVBQWU7QUFBQTtBQUFBLE1BRWIsVUFBVSxDQUFDLE9BQU8sVUFBVSxXQUFXO0FBQUEsTUFDdkMsT0FBTyxDQUFDLFVBQVU7QUFBQSxNQUNsQixRQUFRO0FBQUEsUUFDTjtBQUFBO0FBQUEsVUFFRSxRQUFRO0FBQUE7QUFBQSxVQUVSLGdCQUFnQjtBQUFBO0FBQUEsVUFFaEIsaUJBQWlCO0FBQUEsVUFDakIsU0FBUztBQUFBO0FBQUEsVUFFVCxLQUFLO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQTtBQUFBLFVBRUUsUUFBUTtBQUFBO0FBQUEsVUFFUixnQkFBZ0I7QUFBQTtBQUFBLFVBRWhCLGlCQUFpQjtBQUFBLFVBQ2pCLFNBQVM7QUFBQTtBQUFBLFVBRVQsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDRixXQUFXO0FBQUEsTUFDWCxXQUFXLENBQUMsdUJBQXVCLHNCQUFzQjtBQUFBO0FBQUEsTUFFekQsa0JBQWtCO0FBQUEsSUFDcEIsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLElBQ2Q7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGVBQWUsUUFBUSxRQUFRO0FBRTdCLGNBQU0sT0FBTyxPQUFPLEtBQUssTUFBTTtBQUUvQixtQkFBVyxPQUFPLE1BQU07QUFDdEIsZ0JBQU0sVUFBZSxPQUFPLEdBQVU7QUFHdEMsZUFBSyxTQUFTO0FBQUEsWUFDWixNQUFNO0FBQUEsWUFDTixVQUFVO0FBQUE7QUFBQSxZQUNWLFFBQVEsUUFBUSxLQUFLLFFBQVEsV0FBVyxNQUFNO0FBQUEsVUFDaEQsQ0FBQztBQUFBLFFBQ0g7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

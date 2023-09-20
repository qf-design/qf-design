import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  build: {
    outDir: "es",
    // 是否压缩
    minify: false,
    rollupOptions: {
      // 忽略打包vue文件
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        dir: "dist",
      },
    },
    lib: {
      entry: "./index.ts",
      name: "qf",
      fileName: 'qf',
      formats: ["es", "umd", "cjs"],
    },
  },
  plugins: [vue()],
});

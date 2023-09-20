import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'
import DefineOption from 'unplugin-vue-define-options/vite'

export default defineConfig({
  plugins: [vue(), DefineOption()],
  server: {
    open: true
  }
});

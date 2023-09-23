import DefaultTheme from 'vitepress/theme';
import qfDesign from 'qf-design';
import { NaiveUIContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import exTabs from './../../component/tabs/tabs.vue'
import * as components from './../../component'
console.log(components)
export default {
  ...DefaultTheme,
  enhanceApp: async (ctx: any) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    ctx.app.use(qfDesign);
    ctx.app.component('demo-preview', NaiveUIContainer)
    // ctx.app.component('ex-tabs', exTabs)

    for (const c in components) {
      ctx.app.component((components as any)[c]);
    }
  }
};

import DefaultTheme from 'vitepress/theme';
import qfDesign from 'qf-design';
import { NaiveUIContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import 'qf-design/index.css';

export default {
  ...DefaultTheme,
  enhanceApp: async (ctx: any) => {
    ctx.app.component('demo-preview', NaiveUIContainer)
    ctx.app.use(qfDesign);
  }
};

import { NaiveUIContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import DefaultTheme from 'vitepress/theme'
import qfDesign from 'qf-design'

export default {
  ...DefaultTheme,
  enhanceApp: async (ctx: any) => {
    // 注册一个组件
    ctx.app.component('demo-preview', NaiveUIContainer)
    // 注册一个全局组件
    ctx.app.use(qfDesign)

  }
}
import { NaiveUIContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import DefaultTheme from 'vitepress/theme'
import qfDesign from 'qf-design'
import button from './../../components/button/example.vue'
console.log(JSON.stringify(qfDesign), '看看这是什么')
export default {
  ...DefaultTheme,
  enhanceApp: async (ctx: any) => {
    // 注册一个全局组件
    ctx.app.use(qfDesign)

    // 注册一个组件
    ctx.app.component('demo-preview', NaiveUIContainer)


  }
}
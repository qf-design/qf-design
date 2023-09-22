
import { nav } from './nav'
import { sidebar } from './sidebar'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

export default {
  title: "Qf Design 官方文档",
  head: [
    ['link', {rel: 'icon', href: '/logo.ico'}]
  ],
  themeConfig: {
    logo: "/logo.ico",
    nav,
    sidebar,
    // 搜索
    search: {
      provider: "local"
    },
    // 配置右侧logo
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/qf-design/qf-design"
      }
    ]
  },
  // 多国语言切换
  locales: {
    root: { label: '简体中文' },
    en: { label: "English" },
    ja: { label: '日本語' },
    es: { label: 'Español' },
    pt: { label: 'Português' },
    ko: { label: '한국어' }
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  }

}
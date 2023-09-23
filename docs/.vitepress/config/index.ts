import { nav } from './nav';
import { sidebar } from './sidebar';
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'


export default {
  base: process.env.NODE_ENV === 'production' ? '/qf-design/' : '/',
  title: 'Qf Design 官方文档',
  head: [
    // 添加以下行来配置网站图标
    ['link', { rel: 'icon', href: '/logo.ico' }] // 修改路径为你的图标文件路径
  ],
  themeConfig: {
    logo: '/logo2.png',
    nav,
    sidebar,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/qf-design-test/qf-design-test'
      }
    ],
    // 搜索
    search: {
      provider: 'local'
    }
  },
  locales: {
    zh: { label: '简体中文' },
    root: { label: 'English' },
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
};

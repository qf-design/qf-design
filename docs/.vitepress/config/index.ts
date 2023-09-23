import { nav } from './nav';
import { sidebar } from './sidebar';
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'


export default {
  base: process.env.NODE_ENV === 'production' ? '/qf-design-test/' : '/',
  title: 'Qf Design 官方文档',
  head: [
    // 添加以下行来配置网站图标
    ['link', { rel: 'icon', href: '/logo.ico' }] // 修改路径为你的图标文件路径
  ],
  themeConfig: {
    logo: '/logo2.png',
    logoSmall: 'logo2.png',
    title: 'qf design test',
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
  // markdown: {
  //   theme: {
  //     light: 'vitesse-light',
  //     dark: 'vitesse-dark'
  //   }
  // },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  // vite: {
  //   plugins: [
  //     SearchPlugin({
  //       previewLength: 62,
  //       buttonLabel: 'Search',
  //       placeholder: 'Search docs',
  //       allow: [],
  //       ignore: []
  //     })
  //   ]
  // },
  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2022-present 君惜'
  }
};

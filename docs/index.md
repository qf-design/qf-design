---
layout: home

title: Qf Design

hero:
  name: Qf Design Test
  text: 一个快速搭建Vue3组件库的框架
  tagline: 简单、强大、快速。满足您一直想要的现代UI框架。

  actions:
    - theme: brand
      text: 开始
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress
  image:
    src: /logo2.png
    alt: Qf Design

features:
  - icon: 💡
    title: Vue3组件库
    details: vue3+TypeScript开发
  - icon: 📦
    title: 让你的组件库开发更简单
    details: 提供一个Vue3组件库开发环境
  - icon: 🔩
    title: 按需引入
    details: 直接支持按需引入无需配置任何插件。
  - icon: 👩🏻‍🏫
    title: 专业团队
    details: 上百名前端老师傅在线辅导😏.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>

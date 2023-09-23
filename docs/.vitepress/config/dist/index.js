"use strict";
exports.__esModule = true;
var nav_1 = require("./nav");
var sidebar_1 = require("./sidebar");
var plugin_1 = require("@vitepress-demo-preview/plugin");
exports["default"] = {
    base: process.env.NODE_ENV === 'production' ? '/qf-design/' : '/',
    title: 'Qf Design 官方文档',
    head: [
        // 添加以下行来配置网站图标
        ['link', { rel: 'icon', href: '/logo.ico' }] // 修改路径为你的图标文件路径
    ],
    themeConfig: {
        logo: '/logo2.png',
        logoSmall: 'logo2.png',
        title: 'qf design test',
        nav: nav_1.nav,
        sidebar: sidebar_1.sidebar,
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
        config: function (md) {
            md.use(plugin_1.containerPreview);
            md.use(plugin_1.componentPreview);
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

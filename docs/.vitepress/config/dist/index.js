"use strict";
exports.__esModule = true;
var nav_1 = require("./nav");
var sidebar_1 = require("./sidebar");
var plugin_1 = require("@vitepress-demo-preview/plugin");
var base = process.env.NODE_ENV === 'production' ? '/qf-design/' : '/';
exports["default"] = {
    title: "Qf Design 官方文档",
    base: base,
    head: [
        ['link', { rel: 'icon', href: base + "logo.ico" }]
    ],
    themeConfig: {
        logo: base + "logo.ico",
        nav: nav_1.nav,
        sidebar: sidebar_1.sidebar,
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
        config: function (md) {
            md.use(plugin_1.containerPreview);
            md.use(plugin_1.componentPreview);
        }
    }
};

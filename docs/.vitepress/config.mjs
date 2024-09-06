import { defineConfig } from 'vitepress'
import { set_sidebar } from '../../utils/auto-gen-sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CSP",
  description: "A document of csp",
  srcDir: './src',
  lang: 'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [  
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: "导航",
        items: set_sidebar("/docs/src"),
        collapsible: true,
        collapsed: false,
      },
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 移动端 - 外观
    darkModeSwitchLabel: '外观',

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '菜单',
    aside: 'right',
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    outline: {
      label: '目录',
      level: [2, 3],
      collapsed: true,
    }
  },
  // config of deploy to github
  base: '/blog/'
})

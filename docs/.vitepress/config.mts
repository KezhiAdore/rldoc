import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RL指南",
  description: "一个关于深度强化学习的学习指南",
  base: '/rldoc/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Kezhi\'s Blog', link: 'https://www.kezhi.tech'},
    ],

    sidebar: [
      {
        text: '绪论',
        items: [
          { text: '简介', link: '/start' },
          { text: '基础知识', link: 'guide/base' }
        ]
      },
      {
        text: '学习资料',
        items: [
          { text: '深度学习', link: '/guide/ml' },
          { text: '深度强化学习', link: '/guide/drl' },
          { text: '决策大模型', link: '/guide/dlm' },
        ]
      },
      {
        text: '快速查询',
        items: [
          { text: 'RL算法实现', link: '/resource/rl_algo' },
          { text: 'RL环境', link: '/resource/rl_env' },
          { text: 'RL学习资料', link: '/resource/rl_learning' },
          { text: '开源大语言模型', link: '/resource/open_llm' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KezhiAdore' }
    ],

    editLink: {
      pattern: 'https://github.com/KezhiAdore/rldoc/tree/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    footer: {
      message: '基于 GPL3.0 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} Yu Zhao`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    search: {
      provider: 'local'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

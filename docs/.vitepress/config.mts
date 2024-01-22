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
    ]
  }
})

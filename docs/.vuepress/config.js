module.exports = {
  title: 'CHAO BLOG',
  description: 'this is a blog build by vuepress',
  themeConfig: {
    sidebarDepth: 4,
    nav: [
      {text: "Home", link: '/'},
      {text: "图片墙", link: '/photos/'},
      {text: "友链", link: '/links/'},
      {
        text: '文章', 
        ariaLabel: '文章分类',
        link: '/articles/',
        items: [
          {
            text: '前端', 
            items: [
              {text: 'css', link: '/articles/前端/css/'},
              {text: 'js', link: '/articles/前端/js/'},
              {text: 'vue', link: '/articles/前端/Vue/'},
              {text: 'React', link: '/articles/前端/React/'},
              {text: '工具库', link: '/articles/前端/library/'}
            ]
          },
          {text: '设计', link: '/articles/设计/'},
          {
            text: '后端', link: '/articles/后端/'
          },
          {
            text: '编程通用', link: '/articles/编程通用/'
          }
        ]
      }
    ],
    // sidebar: 'auto',
    sidebar: {
      '/articles/前端/js/': [
        '常用高阶函数',
        '面向对象',
        '异步',
      ],
      '/articles/前端/css/': [
        '不常用的css',
        'div画图',
      ],
      '/articles/前端/React/': [
        'React基础',
        'React简单原理',
        'React路由',
        'React组件'
      ],
      '/articles/前端/Vue/': [
        'React基础',
        'React简单原理',
        'React路由',
        'React组件'
      ],
      '/articles/设计/': [
        'PS基础',
        'AI基础',
        '设计思维'
      ],
      '/articles/后端/': [
        'Redis基础',
      ],
      '/articles/编程通用/': [
        '函数式编程',
        '设计模式',
      ],
    },
    lastUpdated: '上次更新时间',
    nextLinks: true,
    prevLinks: true,
  }
}
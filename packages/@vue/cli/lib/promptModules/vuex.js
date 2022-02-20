module.exports = cli => {
  // 注入预选项中的插件选项
  cli.injectFeature({
    name: 'Vuex',
    value: 'vuex',
    description: 'Manage the app state with a centralized store',
    link: 'https://vuex.vuejs.org/'
  })

  // 当选择此插件执行的逻辑
  cli.onPromptComplete((answers, options) => {
    if (answers.features.includes('vuex')) {
      options.plugins['@vue/cli-plugin-vuex'] = {}
    }
  })
}

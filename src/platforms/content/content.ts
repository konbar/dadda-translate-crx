import Vue from 'vue'
import Vocabulary from '@/utils/vocabulary'
import Storage from '@/utils/storage'
import { _removeTag, _inBlackList } from '@/utils'

import '@/styles/index_translator.scss'

// 组件注册
const componentsContext = require.context('@/components', true, /.vue$/)
componentsContext.keys().forEach(path => {
  const component = componentsContext(path).default
  Vue.component(component.name, component)
})

Vue.use({
  install: Vue => {
    Vue.filter('removeTag', _removeTag)
    Vue.prototype.$vocabulary = Vocabulary
    Vue.prototype.$storage = Storage
  }
})

const initTranslator = () => {
  const div = document.createElement('div')
  div.id = '__tr-container__'

  document.body.appendChild(div)

  new Vue({
    el: '#__tr-container__',
    data() {
      return {
        inExtension: false,
        count: 0,
        translateEnable: true
      }
    },

    created() {
      window.$root = this
    },

    template: '<translator/>'
  })

  Vue.config.devtools = false
  Vue.config.productionTip = false
}

document.addEventListener('DOMContentLoaded', async _ => {
  if (await _inBlackList()) return
  initTranslator()
})

export default initTranslator

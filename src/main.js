import Vue from 'vue'
import App from './Root.vue'
import router from './router'
import store from './vuex'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

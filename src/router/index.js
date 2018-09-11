import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../vuex' // tendo acesso a store do vuex para realizar o auth

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => { // mapeando as rotas
  if (to.path.indexOf('/auth') === -1) { // precisamos logar para navegar no sistema
    if (store.getters.isLogged) {
      next()
    } else {
      console.log(to)
      next('/auth')
    }
    return
  }
  next()
})

export default router

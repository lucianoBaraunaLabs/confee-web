import store from '../vuex' // tendo acesso a store do vuex para realizar o auth
const isAuthRoute = route => route.path.indexOf('/auth') !== -1
const isLogged = () => store.getters.isLogged

export default (to, from, next) => { // mapeando as rotas
  if (!isAuthRoute(to) && !isLogged()) { // precisamos logar para navegar no sistema
    next('/auth')
  } else {
    next()
  }
}

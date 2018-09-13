import store from '../vuex' // tendo acesso a store do vuex para realizar o auth
const isAuthRoute = route => route.path.indexOf('/auth') !== -1
const isLogged = () => 
export default (to, from, next) => { // mapeando as rotas
  if (!isAuthRoute(to)) {
    if (to.path.indexOf('/auth') === -1) { // precisamos logar para navegar no sistema
      if (store.getters.isLogged) {
        next()
      } else {
        console.log(to)
        next('/auth')
      }
      return
    }
    return
  }
  next()
}

// parei aqui https://youtu.be/YTgeBgmsZgw?t=3m21s
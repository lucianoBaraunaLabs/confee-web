import loaderFactory from './loaderFactory'
import registerStore from './registerStore'
import PageLoader from './components/page-loader'

const install = (Vue, store) => { // a função install pode receber parâmetros.
  // estamos aqui pegando o Vue e store do vuex

  Vue.component('PageLoader', PageLoader) // Registrando o componente
  registerStore(store)
  console.log({ store })
  Object.defineProperty(Vue.prototype, '$loader', {
    get () {
      return loaderFactory(this)
    }
  })
}

export default { install }

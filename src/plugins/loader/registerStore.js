import module from './vuex'

const registerStore = (store, moduleName) => {
  store.registerModule('CODECAST_LOADER', { ...module })
}

export default registerStore

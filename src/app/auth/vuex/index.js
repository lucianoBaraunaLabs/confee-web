import state from './state'
import mutations from './mutations'
import * as actions from './actions' // pegando todos os imports parciais como objetos.
import * as getters from './getters' // como não existe mais export default agora estamos pegando tudo com *

export default {
  state,
  actions,
  mutations,
  getters
}

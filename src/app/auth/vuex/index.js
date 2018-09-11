import state from './state'
import actions from './actions'
import mutations from './mutations'
import * as getters from './getters' // como não existe mais export default agora estamos pegando tudo com *

export default {
  state,
  actions,
  mutations,
  getters
}

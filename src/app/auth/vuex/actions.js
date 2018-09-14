import * as types from './mutations-types'
import { postLogin } from '../services'

export const attemptLogin = (context, payload) => {
  console.log(payload)
  // context.commit('setToken', 'xxx')
  return postLogin(payload.email, payload.password)
    .then(data => {
      context.commit(types.setToken, data.email) // antes dos namespaces era feito dessa forma - types.foo
      context.commit(types.setUser, data)
    })
}

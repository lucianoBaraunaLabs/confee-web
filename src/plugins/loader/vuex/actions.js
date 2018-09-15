import * as types from './mutations-types'

export const showLoader = (context) => {
  context.commit(types.setShow, true)
}

export const hideLoader = (context) => {
  context.commit(types.setShow, false)
}

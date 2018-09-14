import { isEmpty } from 'lodash'

// export const isLogged = state => !isEmpty(state.token)
export const isLogged = ({ token }) => !isEmpty(token) // fizemos o destructing no objeto state no argumento e passamos ele para a função
export const currentUser = ({ user }) => user

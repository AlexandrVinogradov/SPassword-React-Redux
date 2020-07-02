import { idNormalizer, findNextId, newLogin } from '../utils/object-helpers'

const ADD_GROUP = 'spassword/main/ADD_GROUP'
const DELETE_GROUP = 'spassword/main/DELETE_GROUP'
const SELECT_GROUP = 'spassword/main/SELECT_GROUP'
const UPDATE_LOGIN = 'spassword/main/UPDATE_LOGIN'

const initialState = {
  groups: [
    { id: 0, name: 'Vk', login: 'admin', password: '12345' },
    { id: 1, name: 'Github', login: 'hello', password: 'qweasdzxc' },
    { id: 2, name: 'Facebook', login: '123123', password: '1997' },
    { id: 3, name: 'Steam', login: 'monkey', password: 'love my mom' },
    { id: 4, name: 'La2 Accounts', login: 'password', password: 'password' }
  ],
  idOfSelectedGroup: 0,
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP:
      return {
        ...state,
        groups: [...state.groups, { id: findNextId(state.groups), name: action.name, login: null, password: null }],
      }
    case DELETE_GROUP:
      return {
        ...state,
        groups: idNormalizer(state.groups, action),
        idOfSelectedGroup: 0,
      }
    case SELECT_GROUP:
      return {
        ...state,
        idOfSelectedGroup: action.idOfSelectedGroup,
      }

    case UPDATE_LOGIN:
      return {
        // ...state.groups,
        groups: newLogin(state.groups, state.idOfSelectedGroup, action.login, action.password),
      }

    default:
      return state
  }
}

export default mainReducer

export const addGroup = name => ({ type: ADD_GROUP, name })
export const deleteGroup = name => ({ type: DELETE_GROUP, name })
export const selectGroup = idOfSelectedGroup => ({ type: SELECT_GROUP, idOfSelectedGroup })
export const updateLogin = login => ({ type: UPDATE_LOGIN, login })

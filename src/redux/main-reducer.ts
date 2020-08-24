import { idNormalizer, findNextId, newLogin } from '../utils/object-helpers'
import {
  InitialStateType,
  addGroupActionType,
  deleteGroupActionType,
  selectGroupActionType,
  updateLoginActionType,
} from '../types/types'
import { InfernActionsTypes } from './store'

export const ADD_GROUP = 'spassword/main/ADD_GROUP'
export const DELETE_GROUP = 'spassword/main/DELETE_GROUP'
export const SELECT_GROUP = 'spassword/main/SELECT_GROUP'
export const UPDATE_LOGIN = 'spassword/main/UPDATE_LOGIN'

const initialState: InitialStateType = {
  groups: [
    { id: 0, name: 'Vk', login: 'admin', password: '12345' },
    { id: 1, name: 'Github', login: 'hello', password: 'qweasdzxc' },
    { id: 2, name: 'Facebook', login: '123123', password: '1997' },
    { id: 3, name: 'Steam', login: 'monkey', password: 'loveMyMom' },
    { id: 4, name: 'La2 Accounts', login: 'password', password: 'password' },
  ],
  idOfSelectedGroup: 0,
}

const mainReducer = (state = initialState, action: ActionTypes): InitialStateType => {
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
        groups: newLogin(state.groups, state.idOfSelectedGroup, action.login),
      }

    default:
      return state
  }
}
export default mainReducer

type ActionTypes = InfernActionsTypes<typeof mainReducerActions>

export const  mainReducerActions = {
  addGroup : (name: string): addGroupActionType => ({ type: ADD_GROUP, name } as const),
  deleteGroup : (name: string): deleteGroupActionType => ({ type: DELETE_GROUP, name } as const),
  selectGroup : (idOfSelectedGroup: number): selectGroupActionType => ({
    type: SELECT_GROUP,
    idOfSelectedGroup,
  } as const),
  updateLogin : (login: string): updateLoginActionType => ({ type: UPDATE_LOGIN, login } as const)
  
}

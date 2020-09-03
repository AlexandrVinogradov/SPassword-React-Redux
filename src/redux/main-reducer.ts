import { idNormalizer, findNextId, newLogin} from '../utils/object-helpers'
import {
  MainReducerInitialStateType,
  addGroupActionType,
  deleteGroupActionType,
  selectGroupActionType,
  updateLoginActionType,
} from '../types/types'
import { InfernActionsTypes, AppStateType } from './store'
import { ThunkAction } from 'redux-thunk'
import {  groupAPI } from '../api/api'

export const ADD_GROUP = 'spassword/main/ADD_GROUP'
export const DELETE_GROUP = 'spassword/main/DELETE_GROUP'
export const SELECT_GROUP = 'spassword/main/SELECT_GROUP'
export const UPDATE_LOGIN = 'spassword/main/UPDATE_LOGIN'

export const SET_USER_GROUPS = 'spassword/main/SET_USER_GROUPS'

const initialState: any = {
  groups: [
    { id: 0, name: 'Vk', login: 'admin', password: '12345' },
    { id: 1, name: 'Github', login: 'hello', password: 'qweasdzxc' },
    { id: 2, name: 'Facebook', login: '123123', password: '1997' },
    { id: 3, name: 'Steam', login: 'monkey', password: 'loveMyMom' },
    { id: 4, name: 'La2 Accounts', login: 'password', password: 'password' },
    // { id: 5,  uuid:"e26f5135-47cc-4868-9b91-d22b794657fe", createdAt:"2020-08-17T00:07:52.981Z",
    // updatedAt:"2020-08-17T00:08:05.572Z",
    // name:"string",
    // login:"my_account_name",
    // password:"qwerty123"}
  ],
  idOfSelectedGroup: 0,
  // userGroups: {},
}



const mainReducer = (state = initialState, action: ActionsTypes): any => {
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

    case SET_USER_GROUPS:
      return Object.assign({}, state, {
        groups: action.data
      })

    default:
      return state
  }
}
export default mainReducer

type ActionsTypes = InfernActionsTypes<typeof mainActions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>


export const  mainActions = {
  addGroup : (name: string): addGroupActionType => ({ type: ADD_GROUP, name } as const),
  deleteGroup : (name: string): deleteGroupActionType => ({ type: DELETE_GROUP, name } as const),
  selectGroup : (idOfSelectedGroup: number): selectGroupActionType => ({
    type: SELECT_GROUP,
    idOfSelectedGroup,
  } as const),
  updateLogin : (login: string): updateLoginActionType => ({ type: UPDATE_LOGIN, login } as const),

  //with API
  setUserGroups: (data: any, errorMessage: string | null): any => ({type: SET_USER_GROUPS, data, errorMessage}as const)
}




// thunksCreators => thunks(dispatch, getState)
export const getGroupsFetch = (): ThunkType => async (dispatch, getState) => {
  const response = await groupAPI.getGroups()

  if (response.status === 200) {

    // set id 
    response.data.data.map((group: any, id: any) => {
      group.id = id
    })

    dispatch(mainActions.setUserGroups(response.data.data, null))
  } else {
    dispatch(mainActions.setUserGroups({}, response.data.error.message))
  }
}
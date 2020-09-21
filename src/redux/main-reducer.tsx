import { idNormalizer, findNextId, newLogin} from '../utils/object-helpers'
import {
  MainReducerInitialStateType,
  addGroupActionType,
  deleteGroupActionType,
  selectGroupActionType,
  updateLoginActionType,
  GroupsType,
} from '../types/types'
import { InfernActionsTypes, AppStateType } from './store'
import { ThunkAction } from 'redux-thunk'
import {  groupAPI } from '../api/api'

export const ADD_GROUP = 'spassword/main/ADD_GROUP'
export const DELETE_GROUP = 'spassword/main/DELETE_GROUP'
export const SELECT_GROUP = 'spassword/main/SELECT_GROUP'
export const UPDATE_LOGIN = 'spassword/main/UPDATE_LOGIN'

export const SET_USER_GROUPS = 'spassword/main/SET_USER_GROUPS'
export const TOGGLE_GROUPS_IS_FETCHING = 'spassword/auth/TOGGLE_GROUPS_IS_FETCHING'


const initialState: any = {
  groups: [
    { id: 0, name: 'Vk', login: 'admin', password: '12345' },
    { id: 1, name: 'Github', login: 'hello', password: 'qweasdzxc' },
    { id: 2, name: 'Facebook', login: '123123', password: '1997' },
    { id: 3, name: 'Steam', login: 'monkey', password: 'loveMyMom' },
    { id: 4, name: 'La2 Accounts', login: 'password', password: 'password' },
  ],
  idOfSelectedGroup: 0,
  isGroupFetching: false
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
    case TOGGLE_GROUPS_IS_FETCHING:
      return {
        ...state, 
        isGroupFetching: action.isFetching
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
  setUserGroups: (data: any, errorMessage: string | null): any => ({type: SET_USER_GROUPS, data, errorMessage}as const),
  toggleGroupsIsFetching: (isFetching: any): any => ({type: TOGGLE_GROUPS_IS_FETCHING, isFetching} as const)
} 


// thunksCreators => thunks(dispatch, getState)
export const getGroupsFetch = (): ThunkType => async (dispatch, getState) => {
  const response = await groupAPI.getGroups()

  if (response.status === 200) {
    dispatch(mainActions.toggleGroupsIsFetching(true))
    // set id 
    response.data.data.map((group: GroupsType, id: number) => {
      group.id = id
    })
    dispatch(mainActions.setUserGroups(response.data.data, null))
    dispatch(mainActions.toggleGroupsIsFetching(false))
  } else {
    dispatch(mainActions.setUserGroups({}, response.data.error.message))
  }
}

export const createGroupFetch = (name: string): ThunkType => async (dispatch, getState) => {
  const response = await groupAPI.createGroup(name, '', '')
}

export const deleteGroupFetch = (uuid: string, title: string): ThunkType => async (dispatch, getState) => {
  const response = await groupAPI.deleteGroup(uuid)
  dispatch(mainActions.deleteGroup(title))
}

export const updateLoginFetch = (uuid: string, name: string, login: any): ThunkType => async (dispatch, getState) => {
  const response = await groupAPI.putLogin(uuid, name, login.customLoginInput, login.customPasswordInput)
  dispatch(mainActions.updateLogin(login))
}


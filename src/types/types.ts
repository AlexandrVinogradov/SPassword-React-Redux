import { ADD_GROUP, DELETE_GROUP, SELECT_GROUP, UPDATE_LOGIN } from '../redux/main-reducer'
import { SET_USER_AUTH_DATA } from '../redux/auth-reducer'

// - MAIN REDUCER
export type GroupsType = {
  uuid: string,
  id: number,
  name: string,
  login: string | null,
  password: string | null,
}
export type MainReducerInitialStateType = {
  groups: GroupsType[],
  idOfSelectedGroup?: number,

}
// - MAIN REDUCER ACTIONS
export type addGroupActionType = {
  type: typeof ADD_GROUP,
  name: string,
}
export type deleteGroupActionType = {
  type: typeof DELETE_GROUP,
  name: string,
}
export type selectGroupActionType = {
  type: typeof SELECT_GROUP,
  idOfSelectedGroup: number,
}
export type updateLoginActionType = {
  type: typeof UPDATE_LOGIN,
  login: string,
}

// - AUTH REDUCER
export type CurrentUserTypes = {
  uuid: string | null,
  createdAt: string | null,
  updatedAt: string | null,
  email: string | null,
  password: string | null,
  firstName: string | null,
  lastName: string | null,
}
export type AuthReducerInitialStateType = {
  currentUser: CurrentUserTypes | {},
  isAuth: boolean,
  errorMessage: string | null,
}
// - AUTH REDUCER ACTIONS
export type setUserAuthDataTypes = {
  type: typeof SET_USER_AUTH_DATA,
  payload: CurrentUserTypes | {},
  isAuth: boolean,
  errorMessage: string | null,
}

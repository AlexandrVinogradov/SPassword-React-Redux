import { ADD_GROUP, DELETE_GROUP, SELECT_GROUP, UPDATE_LOGIN } from '../redux/main-reducer'

// - STATE
export type GroupsType = {
  id: number,
  name: string,
  login: string | null,
  password: string | null,
}
export type InitialStateType = {
  groups: GroupsType[],
  idOfSelectedGroup?: number,
}

// - ACTIONS
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

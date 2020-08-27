import { AppStateType } from './store'

export const getGroups = (state: AppStateType) => {
  return state.mainPage.groups
}

export const getIdOfSelectedGroup = (state: AppStateType) => {
  return state.mainPage.idOfSelectedGroup
}

export const getIsAuth = (state: AppStateType) => {
  return state.auth.isAuth
}
export const getEmail = (state: AppStateType) => {
  return state.auth.currentUser.email
}

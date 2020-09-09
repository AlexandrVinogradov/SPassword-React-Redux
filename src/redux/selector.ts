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
export const getEmail = (state: any) => { // unknown error
  return state.auth.currentUser.email
}

export const getErrorMessage = (state: AppStateType) => { 
  return state.auth.errorMessage
}

import { AppStateType } from './store';

export const getGroups = (state: AppStateType) => {
  return state.mainPage.groups
}

export const getIdOfSelectedGroup = (state: AppStateType) => {
  return state.mainPage.idOfSelectedGroup
}
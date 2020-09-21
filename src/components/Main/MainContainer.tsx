import { connect } from 'react-redux'
import Main from './Main'
import {
  mainActions,
  getGroupsFetch,
  createGroupFetch,
  deleteGroupFetch,
  updateLoginFetch,
} from '../../redux/main-reducer'
import { logout } from '../../redux/auth-reducer'
import { AppStateType } from '../../redux/store'
import { getGroups, getIdOfSelectedGroup, getEmail, getIsAuth } from '../../redux/selector'
import { GroupsType } from '../../types/types'

type MapStatePropsTypes = {
  groups: GroupsType[],
  idOfSelectedGroup?: any,
  email: string | null,
  isAuth: boolean,
}

type MapDispatchPropsTypes = {
  deleteGroup: (name: string) => void,
  updateLogin: (login: string) => void,
  addGroup: (name: string) => void,
  selectGroup: (idOfSelectedGroup: number) => void,
  logout: () => void,
  getGroupsFetch: () => void,
  createGroupFetch: (name: string) => void,
  deleteGroupFetch: (uuid: string, title: string) => void,
  updateLoginFetch: (uuid: string, name: string, login: any) => void,
  setUserGroups: (data: any, errorMessage: string | null) => void,
}
type OwnPropsTypes = {}

const mapStateToProps = (state: AppStateType): MapStatePropsTypes => {
  return {
    groups: getGroups(state),
    idOfSelectedGroup: getIdOfSelectedGroup(state),
    email: getEmail(state),
    isAuth: getIsAuth(state),
  }
}
export default connect<MapStatePropsTypes, MapDispatchPropsTypes, OwnPropsTypes, AppStateType>(mapStateToProps, {
  addGroup: mainActions.addGroup,
  selectGroup: mainActions.selectGroup,
  deleteGroup: mainActions.deleteGroup,
  updateLogin: mainActions.updateLogin,
  logout,
  getGroupsFetch,
  createGroupFetch,
  deleteGroupFetch,
  updateLoginFetch,
  setUserGroups: mainActions.setUserGroups,
})(Main)

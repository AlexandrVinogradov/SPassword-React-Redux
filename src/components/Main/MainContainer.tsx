import { connect } from 'react-redux'
import Main from './Main'
import { mainReducerActions } from '../../redux/main-reducer'
import { authActions } from '../../redux/auth-reducer'
import { AppStateType } from '../../redux/store'
import { getGroups, getIdOfSelectedGroup, getEmail, getIsAuth } from '../../redux/selector'
import { GroupsType } from '../../types/types'

type MapStatePropsTypes = {
  groups: GroupsType[],
  idOfSelectedGroup?: any,
  email: string,
  isAuth: boolean,
}

type MapDispatchPropsTypes = {
  deleteGroup: (name: string) => void,
  updateLogin: (login: string) => void,
  addGroup: (name: string) => void,
  selectGroup: (idOfSelectedGroup: number) => void,
  logout: () => void,
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
  addGroup: mainReducerActions.addGroup,
  selectGroup: mainReducerActions.selectGroup,
  deleteGroup: mainReducerActions.deleteGroup,
  updateLogin: mainReducerActions.updateLogin,
  logout: authActions.logout
})(Main)

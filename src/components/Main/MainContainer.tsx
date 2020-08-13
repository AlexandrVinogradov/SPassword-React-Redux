import { connect } from 'react-redux'
import Main from './Main'
import { actions } from '../../redux/main-reducer'
import { AppStateType } from '../../redux/store'
import { getGroups, getIdOfSelectedGroup } from '../../redux/selector'
import { GroupsType } from '../../types/types'

type MapStatePropsTypes = {
  groups: GroupsType[],
  idOfSelectedGroup?: any,
}

type MapDispatchPropsTypes = {
  deleteGroup: (name: string) => void,
  updateLogin: (login: string) => void,
  addGroup: (name: string) => void,
  selectGroup: (idOfSelectedGroup: number) => void,
}
type OwnPropsTypes = {}

const mapStateToProps = (state: AppStateType): MapStatePropsTypes => {
  return {
    groups: getGroups(state),
    idOfSelectedGroup: getIdOfSelectedGroup(state),
  }
}
export default connect<MapStatePropsTypes, MapDispatchPropsTypes, OwnPropsTypes, AppStateType>(mapStateToProps, {
  addGroup: actions.addGroup,
  selectGroup: actions.selectGroup,
  deleteGroup: actions.deleteGroup,
  updateLogin: actions.updateLogin,
})(Main)

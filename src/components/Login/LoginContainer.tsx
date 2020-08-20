import { connect } from 'react-redux'
import Login from './Login'
import { actions } from '../../redux/auth-reducer'

import { AppStateType } from '../../redux/store'
import { getGroups, getIdOfSelectedGroup } from '../../redux/selector'
import { GroupsType } from '../../types/types'

// type MapStatePropsTypes = {
//   groups: GroupsType[],
//   idOfSelectedGroup?: any,
// }

// type MapDispatchPropsTypes = {
//   login: (name: string) => void,
// }
// type OwnPropsTypes = {}

// const mapStateToProps = (state: AppStateType): MapStatePropsTypes => {
//   return {

//   }
// }
export default connect(null, {
  login: actions.login

})(Login)

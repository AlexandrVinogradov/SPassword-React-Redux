import { connect } from 'react-redux'
import Login from './Login'
import { login } from '../../redux/auth-reducer'

import { AppStateType } from '../../redux/store'
import { getGroups, getIdOfSelectedGroup, getIsAuth } from '../../redux/selector'
import { GroupsType } from '../../types/types'

type MapStatePropsTypes = {
  initialValues: any,
  isAuth: boolean,
}

// type MapDispatchPropsTypes = {
//   login: (name: string) => void,
// }
// type OwnPropsTypes = {}

const mapStateToProps = (state: any): MapStatePropsTypes => {
  return {
    isAuth: getIsAuth(state),
    initialValues: {
      email: 'admin@mail.dev',
      password: 'admin',
    },
  }
}
export default connect(mapStateToProps, { login })(Login)

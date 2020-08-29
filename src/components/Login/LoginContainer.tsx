import { connect } from 'react-redux'
import Login from './Login'
import { login } from '../../redux/auth-reducer'

import { AppStateType } from '../../redux/store'
import { GroupsType } from '../../types/types'

import { getIsAuth } from '../../redux/selector'

type MapStatePropsTypes = {
  // initialValues: any,
  isAuth: boolean,
}

// type MapDispatchPropsTypes = {
//   login: (name: string) => void,
// }
// type OwnPropsTypes = {}

const mapStateToProps = (state: any): MapStatePropsTypes => {
  return {
    isAuth: getIsAuth(state),
    // initialValues: {
    //   email: 'admin@mail.dev',
    //   password: 'admin',
    // },
  }
}
export default connect(mapStateToProps, { login })(Login)

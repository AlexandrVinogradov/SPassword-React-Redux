import { authAPI } from '../api/api'

export const SET_USER_AUTH_DATA = 'spassword/main/SET_USER_AUTH_DATA'

const initialState = {
  email: null,
  password: null,
  uuid: null,
  firstName: null,
  lastName: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
      return {
        ...state,
        email: action.email, // 78 13;00
        password: action.password,
        uuid: action.uuid,
        firstName: action.firstName,
        lastName: action.lastName,
        isAuth: action.isAuth,
      }
    default:
      return state
  }
}
export default authReducer

const setUserAuthData = (email, password, uuid, firstName, lastName, isAuth) => ({
  type: SET_USER_AUTH_DATA,
  email,
  password,
  uuid,
  firstName,
  lastName,
  isAuth
})

export const authActions = {
  login: (email, password) => async dispatch => {
    const response = await authAPI.login(email, password)

    if (response.status === 200) {
    const {email, password, uuid, firstName, lastName} = response.data.data
      dispatch(
        setUserAuthData(
          email,
          password,
          uuid,
          firstName,
          lastName,
          true
        )
      )
    } else {
      alert('login no')
    }
  },

  logout: () => async dispatch => {
    const response = await authAPI.logout()

    // if (response.status === 200) {
      dispatch(setUserAuthData(null, null, null, null, null, false))
    // } else {
    //   alert('logout no')
    // }
  },
}

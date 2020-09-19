import { authAPI } from '../api/api'
import { AuthReducerInitialStateType, CurrentUserTypes, setUserAuthDataTypes } from '../types/types'
import { InfernActionsTypes, AppStateType } from './store'
// import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

export const SET_USER_AUTH_DATA = 'spassword/auth/SET_USER_AUTH_DATA'
export const TOGGLE_IS_FETCHING = 'spassword/auth/TOGGLE_IS_FETCHING'

const initialState: AuthReducerInitialStateType = {
  currentUser: {
    uuid: null,
    createdAt: null,
    updatedAt: null,
    email: null,
    password: null,
    firstName: null,
    lastName: null,
  },
  isAuth: false,
  errorMessage: null,
  isAuthFetching: false
}

const authReducer = (state = initialState, action: ActionsTypes): AuthReducerInitialStateType => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: action.isAuth,
        errorMessage: action.errorMessage,
      }
    case TOGGLE_IS_FETCHING:
        return {
          ...state, 
          isAuthFetching: action.isFetching
        }
    default:
      return state
  }
}
export default authReducer



type ActionsTypes = InfernActionsTypes<typeof authActions>
// type GetStateType = () => AppStateType
// type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>



export const authActions = {

  setUserAuthData: (
    payload: CurrentUserTypes | {},
    isAuth: boolean,
    errorMessage: string | null
  ): setUserAuthDataTypes => ({type: SET_USER_AUTH_DATA, payload, isAuth, errorMessage, } as const),

  toggleIsFetching: (isFetching: any): any => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
}


// thunksCreators => thunks(dispatch, getState)
export const login = (email: string | null, password: string | null): ThunkType => async (dispatch, getState) => {
  dispatch(authActions.toggleIsFetching(true))
  const response = await authAPI.login(email, password)
  dispatch(authActions.toggleIsFetching(false))

  if (response.status === 200) {
    dispatch(authActions.setUserAuthData(response.data.data, true, null))
  } else {
    dispatch(authActions.setUserAuthData({}, false, response.data.error.message))
  }
}

export const  getProfile = (): ThunkType => async (dispatch, getState) => {
  const token = localStorage.jwtToken

  if (token) {
    const response = await authAPI.getProfile()
    dispatch(authActions.setUserAuthData(response.data.data, true, null))
  }
}

export const  logout = (): ThunkType => async (dispatch, getState) => {
  const response = await authAPI.logout() 

  if (response.status === 200) {
    dispatch(authActions.setUserAuthData({}, false, null))
  } else {
    dispatch(authActions.setUserAuthData({}, false, response.data.error.message))
  }
}

export const  registrationFetch = (email: string, password: string, firstName: string, lastName: string): ThunkType => async (dispatch, getState) => {
  const response = await authAPI.postRegistration(email, password, firstName, lastName)
  console.log('123');
}



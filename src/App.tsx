import React, { useEffect } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import style from './App.module.scss'
import store, { AppStateType } from './redux/store'
import MainContainer from './components/Main/MainContainer'
import Registration from './components/Login/Registration'
import Login from './components/Login/Login'
import { getProfile, login, registrationFetch } from './redux/auth-reducer'
import { getIsAuth, getErrorMessage, getUserUuid } from './redux/selector'

type MapDispatchPropsTypes = {
  getProfile: (uuid: string) => void,
  login: (email: string, password: string) => void,
  registrationFetch: (email: string, password: string, firstName: string, lastName: string) => void,
}
type MapStatePropsTypes = {
  isAuth: boolean,
  errorMessage: string | null,
  userUuid: string,
}
type AppPropsTypes = MapDispatchPropsTypes & MapStatePropsTypes

const App: React.FC<AppPropsTypes> = (props: AppPropsTypes) => {
  const { userUuid, getProfile, login, isAuth, registrationFetch, errorMessage } = props

  // useEffect(() => {
  //   if (isAuth) {
  //     getProfile('')
  //   }
  // })

  return (
    <div className={style.App}>
      <BrowserRouter>
        <Switch>
          <Route path='/main' render={() => <MainContainer />} />
          <Route
            path='/registration'
            render={() => <Registration registrationFetch={registrationFetch} isAuth={isAuth} />}
          />
          <Route path='/' render={() => <Login errorMessage={errorMessage} login={login} isAuth={isAuth} />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

const mapStateToProps = (state: any): MapStatePropsTypes => {
  return {
    isAuth: getIsAuth(state),
    errorMessage: getErrorMessage(state),
    userUuid: getUserUuid(state),
  }
}

export const AppContainer: React.FC<any> = connect<MapStatePropsTypes, MapDispatchPropsTypes, AppStateType>(
  mapStateToProps,
  {
    getProfile,
    login,
    registrationFetch,
  }
)(App)

export const Spassword: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

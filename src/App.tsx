import React, { useEffect } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import style from './App.module.scss'
import store, { AppStateType } from './redux/store'
import MainContainer from './components/Main/MainContainer'
import Registration from './components/Login/Registration'
import Login from './components/Login/Login'
import { login, registrationFetch, getProfile, authActions } from './redux/auth-reducer'
import { getIsAuth, getErrorMessage, getInitialValues } from './redux/selector'

type MapDispatchPropsTypes = {
  login: (email: string, password: string) => void,
  registrationFetch: (email: string, password: string, firstName: string, lastName: string) => void,
  getProfile: () => void,
  loadTestAccountData: (data: any) => void,
}
type MapStatePropsTypes = {
  isAuth: boolean,
  errorMessage: string | null,
  initialValues: any,
}
type AppPropsTypes = MapDispatchPropsTypes & MapStatePropsTypes

const App: React.FC<AppPropsTypes> = (props: AppPropsTypes) => {
  const { initialValues, loadTestAccountData, getProfile, login, isAuth, registrationFetch, errorMessage } = props

  useEffect(() => {
    // we have checked on isToken inside
    getProfile()
  }, [])

  return (
    <div className={style.App}>
      <BrowserRouter>
        <Switch>
          <Route path='/main' render={() => <MainContainer />} />
          <Route
            path='/registration'
            render={() => <Registration registrationFetch={registrationFetch} isAuth={isAuth} />}
          />
          <Route
            path='/'
            render={() => (
              <Login
                loadTestAccountData={loadTestAccountData}
                errorMessage={errorMessage}
                login={login}
                isAuth={isAuth}
                initialValues={initialValues}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

const mapStateToProps = (state: any): MapStatePropsTypes => {
  return {
    isAuth: getIsAuth(state),
    errorMessage: getErrorMessage(state),
    initialValues: getInitialValues(state), // pull initial values from account reducer
  }
}

export const AppContainer: React.FC<any> = connect<MapStatePropsTypes, MapDispatchPropsTypes, AppStateType>(
  mapStateToProps,
  {
    login,
    registrationFetch,
    getProfile,
    loadTestAccountData: authActions.loadTestAccountData,
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

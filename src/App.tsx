import React, { useEffect } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import style from './App.module.scss'
import store, { AppStateType } from './redux/store'
import MainContainer from './components/Main/MainContainer'
import Registration from './components/Login/Registration'
import Login from './components/Login/Login'
import { getProfile, login } from './redux/auth-reducer'
import { getIsAuth } from './redux/selector'

type AppPropsTypes = {
  getProfile: () => void,
  login: (email: string, password: string) => void,
  isAuth: boolean,
}

const App: React.FC<AppPropsTypes> = (props: AppPropsTypes) => {
  const { getProfile, login, isAuth } = props

  useEffect(() => {
    getProfile()
  })

  return (
    <div className={style.App}>
      <BrowserRouter>
        <Switch>
          <Route path='/main' render={() => <MainContainer />} />
          <Route path='/registration' render={() => <Registration login={login} isAuth={isAuth} />} />
          <Route path='/' render={() => <Login login={login} isAuth={isAuth} />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

type MapDispatchPropsTypes = {
  getProfile: () => void,
  login: (email: string, password: string) => void,
}
type MapStatePropsTypes = {
  isAuth: boolean,
}

const mapStateToProps = (state: any): MapStatePropsTypes => {
  return {
    isAuth: getIsAuth(state),
  }
}

export const AppContainer: any = connect<MapStatePropsTypes, MapDispatchPropsTypes, AppStateType>(mapStateToProps, {
  getProfile,
  login,
})(App)

export const Spassword: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

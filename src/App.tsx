import React, { useEffect } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import style from './App.module.scss'
import store from './redux/store'
import MainContainer from './components/Main/MainContainer'
import Registration from './components/Login/Registration'
import LoginContainer from './components/Login/LoginContainer'
import { authActions } from './redux/auth-reducer'

// type AppPropsTypes = {
//   logout: () => void,
// }

const App: React.FC = (props: any) => {
  const { getProfile } = props

  useEffect(() => {
    getProfile()
  })

  return (
    <div className={style.App}>
      <BrowserRouter>
        <Switch>
          <Route path='/main' render={() => <MainContainer />} />
          <Route path='/registration' render={() => <Registration />} />
          <Route path='/' render={() => <LoginContainer />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

type MapDispatchPropsTypes = {
  logout: () => void,
}

export const AppContainer = connect<MapDispatchPropsTypes>(null, {
  getProfile: authActions.getProfile,
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


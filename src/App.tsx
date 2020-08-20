import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import style from './App.module.scss'
import store from './redux/store'
import MainContainer from './components/Main/MainContainer'
import Registration from './components/Login/Registration'
import LoginContainer from './components/Login/LoginContainer'

const App: React.FC = () => {
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

const Spassword: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}

export default Spassword

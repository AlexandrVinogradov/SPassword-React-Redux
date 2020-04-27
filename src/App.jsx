import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import style from './App.module.scss'
import Login from './components/Login/Login'
import store from './redux/store'
import MainContainer from './components/Main/MainContainer'

// Interface remove fill to scss

const App = () => {
  return (
    <div className={style.App}>
      <BrowserRouter>
        <Switch>
          <Route path="/main" render={() => <MainContainer />} />
          <Route path="/" render={() => <Login />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

const Spassword = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}

export default Spassword

import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import style from './App.module.scss'
import Login from './Login/Login'
import Main from './Main/Main'

const App = () => {
  return (
    <div className={style.App}>
      <BrowserRouter>
        <Switch>
          <Route path="/main" render={() => <Main />} />
          <Route path="/" render={() => <Login />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

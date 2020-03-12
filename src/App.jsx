import React from 'react'
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom'
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

        <NavLink to="/main" activeClassName={style.active} className={style.a}>
          <div className={style.name} data-text={style.home}>
            Click this bitch
          </div>
        </NavLink>
        <NavLink to="/login" activeClassName={style.active} className={style.a}>
          <div className={style.name} data-text={style.home}>
            Click this bitch Login
          </div>
        </NavLink>
        
      </BrowserRouter>
    </div>
  )
}

export default App

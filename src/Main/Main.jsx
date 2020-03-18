import React from 'react'
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom'
import style from './Main.module.scss'
import shield from '../img/shield.png'
import plus from '../img/Icon-plus.png'
import arrow from '../img/icon-arrow.png'
import NavListbar from './NavListbar/NavListbar'

const Main = () => {
  return (
    <main className={style.Main}>
      <section className={style.sidebar}>
        <div className={style.sidebar__header}>
          <img src={shield} alt="SPassword logo" />
          <p className={style.sidebar__header_name}>SPassword</p>
        </div>

        <div className={style.sidebar__addGroup}>
          <p>Add group</p>
          <img src={plus} alt="SPassword logo" />
        </div>

        <NavListbar />

        <div className={style.sidebar__logout}>
          <p>Logout</p>
          <NavLink to="/login"> 
          <img src={arrow} alt="SPassword logo" />
          </NavLink>
        </div>
      </section>
      
    </main>
  )
}

export default Main

import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Login.module.scss'
import shield from '../img/shield.png'

const Login = () => {
  return (
    <div className={style.Login}>

      <img className={style.Login__shield} src={shield} alt="shield" />
      <span className={style.Login__title}>SPassword - Your safe</span>

      <input className={style.Login__input} placeholder="Placeholder" />
      <input className={style.Login__input} placeholder="Placeholder" />

      <NavLink to="/main" className={style.Login__btn_link}>
        <button className={style.Login__btn} type="button">
          Login
        </button>
      </NavLink>
    </div>
  )
}

export default Login

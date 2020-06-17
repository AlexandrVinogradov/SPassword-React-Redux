import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Login.module.scss'
import shield from '../../img/shield.png'

const Login = () => {
  return (
    <div className={style.Login}>
      <img className={style.shield} src={shield} alt="shield" />
      <span className={style.title}>SPassword - Your safe</span>

      <input className={style.input} placeholder="Placeholder" />
      <input className={style.input} type='password' placeholder="Placeholder" />

      <NavLink to="/main" className={style.btn_link}>
        <button className={style.btn} type="button">
          Login
        </button>
      </NavLink>
    </div>
  )
}

export default Login

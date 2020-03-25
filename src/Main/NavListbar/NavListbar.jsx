import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './NavListbar.module.scss'

const NavListbar = () => {
  return (
    <nav>
      <ul className={style.NavListBar_ul}>
        <li>
          <NavLink to="/main/vk" activeClassName={style.active} className={style.a}>
            Vk
          </NavLink>
        </li>
        <li>
          <NavLink to="/main/github" activeClassName={style.active} className={style.a}>
            Github
          </NavLink>
        </li>
        <li>
          <NavLink to="/main/facebook" activeClassName={style.active} className={style.a}>
            Facebook
          </NavLink>
        </li>
        <li>
          <NavLink to="/main/steam" activeClassName={style.active} className={style.a}>
            Steam
          </NavLink>
        </li>
        <li>
          <NavLink to="/main/la2" activeClassName={style.active} className={style.a}>
            La2 Accounts
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavListbar

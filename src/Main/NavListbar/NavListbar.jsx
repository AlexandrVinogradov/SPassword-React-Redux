import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './NavListbar.module.scss'

const NavListbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/main" activeClassName={style.active} className={style.a}>
            <div className={style.name} data-text={style.home}>
              Vk
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/main" activeClassName={style.active} className={style.a}>
            <div className={style.name} data-text={style.home}>
              Github
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/main" activeClassName={style.active} className={style.a}>
            <div className={style.name} data-text={style.home}>
              Facebook
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/main" activeClassName={style.active} className={style.a}>
            <div className={style.name} data-text={style.home}>
              Steam
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/main" activeClassName={style.active} className={style.a}>
            <div className={style.name} data-text={style.home}>
              La2 Accounts
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavListbar

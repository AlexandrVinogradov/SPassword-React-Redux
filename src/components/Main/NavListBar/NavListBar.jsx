import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './NavListBar.module.scss'

const NavListBar = props => {
  console.log(props.groups)
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
  const groups = props.groups.map(g => <Group groups={g} key={g.id} />)
  return <div>
    {groups}
  </div>
}

const Group = props => {
  console.log(props);
  return <div>{props.group}</div>
}

export default NavListBar

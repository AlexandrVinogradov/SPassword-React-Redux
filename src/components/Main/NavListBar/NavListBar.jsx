import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './NavListBar.module.scss'

const NavListBar = props => {

  const groups = props.groups.map(g => <Group name={g.name} id={g.id} key={g.id} />)

  return (
    <nav>
      <ul className={style.NavListBar_ul}>{groups}</ul>
    </nav>
  )
}
 
const Group = props => {
  return (
    <li>
      <NavLink to={"/main/" + props.name} activeClassName={style.active} className={style.a}>
        {props.name}
      </NavLink>
    </li>
  )
}

export default NavListBar

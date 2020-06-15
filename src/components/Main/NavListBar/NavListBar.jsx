import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './NavListBar.module.scss'

const NavListBar = props => {
  const groups = props.groups.map(g => (
    <Group selectGroup={props.selectGroup} isSelected={g.isSelected} name={g.name} id={g.id} key={g.id} />
  ))

  return (
    <nav>
      <ul className={style.NavListBar_ul}>{groups}</ul>
    </nav>
  )
}

const Group = props => {
  const selectNewGroup = () => {
    props.selectGroup(true)
    console.log(props)
  }

  return (
    <li>
      <NavLink to={'/main/' + props.name} onClick={selectNewGroup} activeClassName={style.active} className={style.a}>
        {props.name}
      </NavLink>
    </li>
  )
}

export default NavListBar

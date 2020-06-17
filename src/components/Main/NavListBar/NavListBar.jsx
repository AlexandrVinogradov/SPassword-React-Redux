import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import style from './NavListBar.module.scss'

const NavListBar = props => {
  const { groups } = props

  const location = useLocation()
  const selectedGroup = groups.find(i => i.name === location.pathname.slice(6))

  let selectedGroupNew

  if (selectedGroup) {
    selectedGroupNew = selectedGroup
  } else {
    selectedGroupNew = 0
  }

  const findSelectedGroup = () => {
    props.selectGroup(selectedGroupNew.id)
  }
  findSelectedGroup()

  const groupElement = groups.map(g => (
    <Group
      selectGroup={props.selectGroup}
      idOfSelectedGroup={props.idOfSelectedGroup}
      isSelected={g.isSelected}
      name={g.name}
      id={g.id}
      key={g.id}
    />
  ))

  return (
    <nav>
      <ul className={style.NavListBar_ul}>{groupElement}</ul>
    </nav>
  )
}

const Group = props => {
  const { name } = props
  return (
    <li>
      <NavLink to={`/main/${name}`} activeClassName={style.active} className={style.a}>
        {name}
      </NavLink>
    </li>
  )
}

export default NavListBar

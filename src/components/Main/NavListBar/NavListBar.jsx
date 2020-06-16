import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import style from './NavListBar.module.scss'

const NavListBar = props => {

  let location = useLocation()
  let selectedGroup = props.groups.find(i => i.name === location.pathname.slice(6))


  // selectedGroup ? selectedGroup : 0
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


  const groups = props.groups.map(g => (
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
      <ul className={style.NavListBar_ul}>{groups}</ul>
    </nav>
  )
}

const Group = props => {
  // const selectNewGroup = () => {
  //   props.selectGroup(true, props.id)
  //   console.log(props)
  // }

  return (
    <li>
      <NavLink to={'/main/' + props.name} activeClassName={style.active} className={style.a}>
        {props.name}
      </NavLink>
    </li>
  )
}

export default NavListBar

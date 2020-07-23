import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import style from './NavListBar.module.scss'
import { GroupsType } from '../../../types/types'

type NavListBarPropsType = {
  groups: GroupsType[],
  editModeToggle: (toggle: boolean) => void,
  selectGroup: (idOfSelectedGroup: number) => void,
}

type GroupPropsTypes = {
  name: string,
  login: string | null,
  password: string | null,
  editModeToggle: (toggle: boolean) => void,
}

const NavListBar: React.FC<NavListBarPropsType> = (props: NavListBarPropsType) => {
  const { groups, editModeToggle, selectGroup } = props

  const location = useLocation()
  const selectedGroup = groups.find(i => i.name === location.pathname.slice(6))

  let selectedGroupNew: any

  if (selectedGroup) {
    selectedGroupNew = selectedGroup
  } else {
    selectedGroupNew = 0
  }

  const findSelectedGroup = () => {
    selectGroup(selectedGroupNew.id)
  }
  findSelectedGroup()

  const groupElement = groups.map(g => (
    <Group editModeToggle={editModeToggle} 
    name={g.name} 
    login={g.login} 
    password={g.password}  
    key={g.id} />
  ))

  return (
    <nav>
      <ul className={style.NavListBar_ul}>{groupElement}</ul>
    </nav>
  )
}

const Group: React.FC<GroupPropsTypes> = (props: GroupPropsTypes) => {
  const test = () => {
    const { login, password, editModeToggle } = props

    if (!login && !password) {
      editModeToggle(true)
    }
  }

  const { name } = props
  return (
    <li>
      <NavLink onClick={test} to={`/main/${name}`} activeClassName={style.active} className={style.a}>
        {name}
      </NavLink>
    </li>
  )
}

export default NavListBar

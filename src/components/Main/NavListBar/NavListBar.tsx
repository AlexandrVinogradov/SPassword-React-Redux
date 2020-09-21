import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import style from './NavListBar.module.scss'
import { GroupsType } from '../../../types/types'
import Preloader from '../../common/Preloader/Preloader'
import { AppStateType } from '../../../redux/store'

type NavListBarPropsType = {
  groups: GroupsType[],
  editModeToggle: (toggle: boolean) => void,
  selectGroup: (idOfSelectedGroup: number) => void,
  isMobileNavList: any,
}

type GroupPropsTypes = {
  name: string,
  login: string | null,
  password: string | null,
  editModeToggle: (toggle: boolean) => void,
  isMobileNavList: any,
}

const NavListBar: React.FC<NavListBarPropsType> = (props: NavListBarPropsType) => {
  const { groups, editModeToggle, selectGroup, isMobileNavList } = props

  const location = useLocation()
  let selectedGroup = null
  if (groups) {
    selectedGroup = groups.find(i => i.name === location.pathname.slice(6))
  }

  const isFetching = useSelector((state: AppStateType) => state.mainPage.isGroupFetching)

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

  let groupElement = null
  if (groups) {
    groupElement = groups.map(g => (
      <Group
        editModeToggle={editModeToggle}
        isMobileNavList={isMobileNavList}
        name={g.name}
        login={g.login}
        password={g.password}
        key={g.id}
      />
    ))
  }

  if (isFetching) {
    return <Preloader className={style.preloader} />
  }

  return (
    <nav>
      <ul className={style.NavListBar_ul}>{groupElement}</ul>
    </nav>
  )
}

const Group: React.FC<GroupPropsTypes> = (props: GroupPropsTypes) => {
  const handleOpenEditModToggle = () => {
    const { login, password, editModeToggle, isMobileNavList } = props

    isMobileNavList(false)
    if (!login && !password) {
      editModeToggle(true)
    } else {
      editModeToggle(false)
    }
  }

  const { name } = props
  return (
    <li>
      <NavLink
        onClick={handleOpenEditModToggle}
        to={`/main/${name}`}
        activeClassName={style.active}
        className={style.a}
      >
        {name}
      </NavLink>
    </li>
  )
}

export default NavListBar

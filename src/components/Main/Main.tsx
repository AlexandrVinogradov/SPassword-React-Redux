import React, { useState, BaseSyntheticEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, Redirect } from 'react-router-dom'
import style from './Main.module.scss'
import shield from '../../img/shield.png'
import NavListBar from './NavListBar/NavListBar'
import SVGIcon from '../../SVGIcons'
import Interface from './Interface/Interface'
import ModalAdd from './ModalAdd/ModalAdd'
import { GroupsType } from '../../types/types'
import MobileNavList from './Interface/MobileNavList/MobileNavList'

type MapStatePropsTypes = {
  groups: GroupsType[],
  idOfSelectedGroup: number,
  email: string | null,
  isAuth: boolean,
}
type MapDispatchPropsTypes = {
  deleteGroup: (name: string) => void, 
  updateLogin: (login: string) => void,
  addGroup: (name: string) => void,
  selectGroup: (idOfSelectedGroup: number) => void,
  logout: () => void,
}
type OwnPropsTypes = {}
type MainPropsTypes = MapStatePropsTypes & MapDispatchPropsTypes & OwnPropsTypes

const Main: React.FC<MainPropsTypes> = (props: MainPropsTypes) => {
  const { groups, selectGroup, idOfSelectedGroup, deleteGroup, updateLogin, addGroup, email, isAuth, logout } = props

  const [showModal, toggleModal] = useState(false)
  const [showMobileNavList, isMobileNavList] = useState(false)
  const [isEditMode, editModeToggle] = useState(false)
  const { t } = useTranslation()

  const handleOpenModal = () => {
    toggleModal(true)
    editModeToggle(false)
  }

  const handleCloseModal = (event: BaseSyntheticEvent) => {
    if (event.target.id === 'modal') {
      toggleModal(false)
    }
  }

  const onAddGroup = (value: any) => {
    addGroup(value.customInput)
    toggleModal(false)
  }

  if (!isAuth) {
    return <Redirect to='/login' />
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <main className={style.Main}>
      {showModal ? (
        <ModalAdd toggleModal={toggleModal} handleCloseModal={handleCloseModal} onAddGroup={onAddGroup} />
      ) : null}

      {showMobileNavList ? (
        <MobileNavList
          isMobileNavList={isMobileNavList}
          editModeToggle={editModeToggle}
          groups={groups}
          selectGroup={selectGroup}
        />
      ) : null}

      <section className={style.sidebar}>
        <div className={style.header}>
          <img src={shield} alt='SPassword logo' />
          <p className={style.header_name}>SPassword</p>
        </div>

        <button type='button' onClick={handleOpenModal} className={style.circle_btn}>
          <p>{t('Add group')}</p>
          <SVGIcon className={style.circle_btn__icon} name='addGroup' />
        </button>

        <NavListBar
          isMobileNavList={isMobileNavList}
          editModeToggle={editModeToggle}
          groups={groups}
          selectGroup={selectGroup}
        />

        {/* <NavLink className={`${style.circle_btn} ${style.circle_btn__logout}`} to='/login'> */}
        <button onClick={handleLogout} className={`${style.circle_btn} ${style.circle_btn__logout}`} type='button'>
          <p>{t('Logout')}</p>
          <SVGIcon className={style.circle_btn__icon} name='logout' />
        </button>
        {/* </NavLink> */}
      </section>

      <Interface
        updateLogin={updateLogin}
        deleteGroup={deleteGroup}
        groups={groups}
        idOfSelectedGroup={idOfSelectedGroup}
        editModeToggle={editModeToggle}
        isEditMode={isEditMode}
        isMobileNavList={isMobileNavList}
        email={email}
      />
    </main>
  )
}

export default Main

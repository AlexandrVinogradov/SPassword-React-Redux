import React, { useState, BaseSyntheticEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
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
}
type MapDispatchPropsTypes = {
  deleteGroup: (name: string) => void,
  updateLogin: (login: string) => void,
  addGroup: (name: string) => void,
  selectGroup: (idOfSelectedGroup: number) => void,
}
type OwnPropsTypes = {}
type MainPropsTypes = MapStatePropsTypes & MapDispatchPropsTypes & OwnPropsTypes

const Main: React.FC<MainPropsTypes> = (props: MainPropsTypes) => {
  const { groups, selectGroup, idOfSelectedGroup, deleteGroup, updateLogin, addGroup } = props

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

        <NavLink className={`${style.circle_btn} ${style.circle_btn__logout}`} to='/login'>
          <p>{t('Logout')}</p>
          <SVGIcon className={style.circle_btn__icon} name='logout' />
        </NavLink>
      </section>

      <Interface
        updateLogin={updateLogin}
        deleteGroup={deleteGroup}
        groups={groups}
        idOfSelectedGroup={idOfSelectedGroup}
        editModeToggle={editModeToggle}
        isEditMode={isEditMode}
        isMobileNavList={isMobileNavList}
      />
    </main>
  )
}

export default Main

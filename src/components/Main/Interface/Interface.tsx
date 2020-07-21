import React, { useState } from 'react'
import style from './Interface.module.scss'
import shield from '../../../img/shield.png'
import SVGIcon from '../../../SVGIcons'
import AcceptModal from '../AcceptModal/AcceptModal'
import EditMode from './EditMode/EditMode'
import Hint from './Hint/Hint'
import './animation.css'
import { GroupsType } from '../../../types/types'

type InterfacePropsTypes = {
  idOfSelectedGroup: number,
  updateLogin: () => void,
  groups: GroupsType[],
  deleteGroup: () => void,
  isEditMode: (toggle: boolean) => void,
  editModeToggle: boolean,
}

const Interface: React.FC<InterfacePropsTypes> = (props: InterfacePropsTypes) => {
  const { idOfSelectedGroup, updateLogin, groups, deleteGroup, isEditMode, editModeToggle } = props

  const [showAcceptModal, isShowAcceptModal] = useState(false)
  const [showHint, isHint] = useState(false)

  let title: string 
  let login: string | null
  let password: string | null

  if (idOfSelectedGroup !== undefined && groups[idOfSelectedGroup]) {
    const selectedGroup = props.groups[props.idOfSelectedGroup]

    title = selectedGroup.name
    login = selectedGroup.login
    password = selectedGroup.password
  }

  const hintAnimation = () => {
    if (!showHint) {
      isHint(true)
      setTimeout(() => {
        isHint(false)
      }, 2000)
    }
  }

  const handleShowAcceptModal = () => {
    if (idOfSelectedGroup === 0 || idOfSelectedGroup) {
      isShowAcceptModal(true)
      isEditMode(false)
    } else {
      hintAnimation()
    }
  }

  const handleEnterInEditMod = () => {
    if (idOfSelectedGroup === 0 || idOfSelectedGroup) {
      isEditMode(!editModeToggle)
    } else {
      hintAnimation()
    }
  }

  return (
    <main className={style.interface__wrapper}>
      {showAcceptModal ? (
        <AcceptModal title={title} deleteGroup={deleteGroup} isShowAcceptModal={isShowAcceptModal} />
      ) : null}

      {showHint ? <Hint /> : null}

      <section className={style.interface}>
        <div className={style.header_mobile}>
          <SVGIcon className={style.icon_rectangles} name='rectangles' fill='#FF8364' />
          <div className={style.header__mobile_logo}>
            <p className={style.sidebar__header_name}>SPassword</p>
            <img src={shield} alt='SPassword logo' />
          </div>
        </div>

        <div className={style.header}>
          <h1>{title}</h1>

          <button type='button' className={style.btn}>
            <SVGIcon className={style.icon_dots} name='dots' fill='#5F6CAF' />
          </button>

          <div className={style.edit_btns}>
            <button onClick={handleEnterInEditMod} type='button' className={style.btn}>
              <SVGIcon className={style.icon_pencil} name='pencil' fill='#5F6CAF' />
            </button>
            <button onClick={handleShowAcceptModal} type='button' className={style.btn}>
              <SVGIcon className={style.icon_bucket} name='bucket' fill='#FF8364' />
            </button>
          </div>
        </div>

        <div className={style.content}>
          {editModeToggle ? (
            <EditMode
              login={login}
              password={password}
              editModeToggle={editModeToggle}
              isEditMode={isEditMode}
              updateLogin={updateLogin}
            />
          ) : null}
          <div className={style.groupInfo}>
            {title ? <GroupInfo login={login} password={password} /> : 'MARKDOWN CONTENT'}
          </div>
        </div>
      </section>
    </main>
  )
}

type GroupInfoPropsTypes = {
  login: string | null,
  password: string | null
}

const GroupInfo: React.FC<GroupInfoPropsTypes> = (props: GroupInfoPropsTypes) => {
  const { login, password } = props

  return (
    <div>
      <p>{login}</p>
      <p>{password}</p>
    </div>
  )
}
export default Interface

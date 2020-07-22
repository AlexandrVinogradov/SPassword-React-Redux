import React, { useState } from 'react'
import style from './Interface.module.scss'
import shield from '../../../img/shield.png'
import SVGIcon from '../../../SVGIcons'
import AcceptModal from '../AcceptModal/AcceptModal'
import EditMode from './EditMode/EditMode'
import Hint from './Hint/Hint'
import './animation.scss'
import { GroupsType } from '../../../types/types'

type InterfacePropsTypes = {
  idOfSelectedGroup: number,
  updateLogin: (login: string) => void,
  groups: GroupsType[],
  deleteGroup: (login: string) => void,
  isEditMode: (toggle: boolean) => void,
  editModeToggle: boolean,
}

const Interface: React.FC<InterfacePropsTypes> = (props: InterfacePropsTypes) => {
  const { idOfSelectedGroup, updateLogin, groups, deleteGroup, isEditMode, editModeToggle } = props

  const [showAcceptModal, isShowAcceptModal] = useState(false)
  const [showHint, isHint] = useState(false)

  let title: string = ''
  let login: string | null = null
  let password: string | null = null

  if (idOfSelectedGroup !== undefined && groups[idOfSelectedGroup]) {
    const selectedGroup = props.groups[props.idOfSelectedGroup]

    title = selectedGroup.name
    login = selectedGroup.login
    password = selectedGroup.password
  }

  const hintAnimation = () => { // need types???// need types???// need types???
    if (!showHint) {
      isHint(true)
      setTimeout(() => {
        isHint(false)
      }, 2000)
    }
  }

  const handleShowAcceptModal = () => { // need types???// need types???// need types???
    if (idOfSelectedGroup === 0 || idOfSelectedGroup) {
      isShowAcceptModal(true)
      isEditMode(false)
    } else {
      hintAnimation()
    }
  }

  const handleEnterInEditMod = () => { // need types???// need types???// need types???
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
          <SVGIcon className={style.icon_rectangles} name='rectangles'  />
          <div className={style.header__mobile_logo}>
            <p className={style.sidebar__header_name}>SPassword</p>
            <img src={shield} alt='SPassword logo' />
          </div>
        </div>

        <div className={style.header}>
          <h1>{title}</h1>

          <button type='button' className={style.btn}>
            <SVGIcon className={style.icon_dots} name='dots' />
          </button>

          <div className={style.edit_btns}>
            <button onClick={handleEnterInEditMod} type='button' className={style.btn}> 
              <SVGIcon className={style.icon_pencil} name='pencil' />
            </button>
            <button onClick={handleShowAcceptModal} type='button' className={style.btn}>
              <SVGIcon className={style.icon_bucket} name='bucket' />
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

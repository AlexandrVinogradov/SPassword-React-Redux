import React, { useState } from 'react'
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next'
import style from './Interface.module.scss'

import styleGroupInfo from './GroupInfo/GroupInfo.module.scss'
import shield from '../../../img/shield.png'
import SVGIcon from '../../../SVGIcons'
import AcceptModal from '../AcceptModal/AcceptModal'
import EditMode from './EditMode/EditMode'
import Hint from './Hint/Hint'
import './animation.scss'
import { GroupsType } from '../../../types/types'
import GroupInfo from './GroupInfo/GroupInfo'
import LanguageToggle from '../../LanguagesToggle/LanguagesToggle'

type InterfacePropsTypes = {
  idOfSelectedGroup: number,
  updateLogin: (login: string) => void,
  groups: GroupsType[],
  deleteGroup: (login: string) => void,
  editModeToggle: (toggle: boolean) => void,
  isEditMode: boolean,
  isMobileNavList: (toggle: boolean) => void,
  email: string | null,
  deleteGroupFetch: (uuid: string, title: string) => void
  getGroupsFetch: () => void
}

type InterfacePropsTypesWithTranslation = InterfacePropsTypes & WithTranslation

const Interface: React.FC<InterfacePropsTypesWithTranslation> = (props: InterfacePropsTypesWithTranslation) => {
  const {
    idOfSelectedGroup,
    updateLogin,
    groups,
    deleteGroup,
    isEditMode,
    editModeToggle,
    i18n,
    tReady,
    isMobileNavList,
    email,
    deleteGroupFetch,
    getGroupsFetch
  } = props

  const [showAcceptModal, isShowAcceptModal] = useState(false)
  const [showHint, isHint] = useState(false)
  const [hintMessage, setHintMessage] = useState('null')
  const [hintStatus, setHintStatusStyle] = useState('null')
  const { t } = useTranslation()

  let title: string = ''
  let selectedGroupId: string = ''
  let login: string | null = null
  let password: string | null = null

  if (idOfSelectedGroup !== undefined && groups[idOfSelectedGroup]) {
    const selectedGroup = props.groups[props.idOfSelectedGroup]

    title = selectedGroup.name
    selectedGroupId = selectedGroup.uuid
    login = selectedGroup.login
    password = selectedGroup.password
  }

  const hintAnimation = (message: string, hintStatusStyle: string) => {
    if (!showHint) {
      setHintMessage(message)
      setHintStatusStyle(hintStatusStyle)
      isHint(true)

      setTimeout(() => {
        isHint(false)
      }, 1500)
    }
  }

  const handleOpenMobileNavList = () => {
    isMobileNavList(true)
  }

  const handleShowAcceptModal = () => {
    if (idOfSelectedGroup === 0 || idOfSelectedGroup) {
      isShowAcceptModal(true)
      editModeToggle(false)
    } else {
      hintAnimation(t('must select a group'), 'danger')
    }
  }

  const handleEnterInEditMod = () => {
    if (idOfSelectedGroup === 0 || idOfSelectedGroup) {
      editModeToggle(!isEditMode)
    } else {
      hintAnimation(t('must select a group'), 'danger')
    }
  }

  return (
    <main className={style.interface__wrapper}>
      {showAcceptModal ? (
        <AcceptModal
          selectedGroupId={selectedGroupId}
          deleteGroupFetch={deleteGroupFetch}
          title={title}
          deleteGroup={deleteGroup}
          isShowAcceptModal={isShowAcceptModal}
          getGroupsFetch={getGroupsFetch}
        />
      ) : null}

      {showHint ? <Hint hintStatus={hintStatus} hintMessage={hintMessage} /> : null}

      <section className={style.interface}>
        <div className={style.header_mobile}>
          <button onClick={handleOpenMobileNavList} type='button'>
            <SVGIcon className={style.icon_rectangles} name='rectangles' />
          </button>

          <div className={style.header__mobile_logo}>
            <p className={style.sidebar__header_name}>SPassword</p>
            <img src={shield} alt='SPassword logo' />
          </div>
        </div>

        <div className={style.header}>
          <h1>{title}</h1>

          <LanguageToggle i18n={i18n} tReady={tReady} t={t} />

          {email}

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
          {isEditMode ? (
            <EditMode
              login={login}
              password={password}
              editModeToggle={editModeToggle}
              isEditMode={isEditMode}
              updateLogin={updateLogin}
            />
          ) : null}

          <div className={styleGroupInfo.groupInfo}>
            {title ? (
              <GroupInfo title={title} hintAnimation={hintAnimation} login={login} password={password} />
            ) : (
              t('content')
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default withTranslation()(Interface)

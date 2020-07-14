import React from 'react'
import style from './AcceptModal.module.scss'

type PropsType = {
  title: string,
  isShowAcceptModal: (toggle: boolean) => void,
  deleteGroup: (title: string) => void
}

const AcceptModal: React.FC<PropsType> = props => {
  const { title, isShowAcceptModal, deleteGroup } = props

  const handleCloseAcceptModal = () => {
    isShowAcceptModal(false)
  }

  const handleDeleteGroup = () => {
    deleteGroup(title)
    isShowAcceptModal(false)
  }

  return (
    <div className={style.accept_modal__container}>
      <div className={style.accept_modal}>
        <div className={style.accept_modal__content}>
          <p>
            Are you sure that you want to delete <span>{title}</span> passwords
          </p>
          <div className={style.buttons_block}>
            <button onClick={handleDeleteGroup} type='button'>
              Yes
            </button>
            <button onClick={handleCloseAcceptModal} type='button'>
              Oh, no
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcceptModal

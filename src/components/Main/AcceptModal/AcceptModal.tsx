import React from 'react'
import { useTranslation } from 'react-i18next'
import style from './AcceptModal.module.scss'

type AcceptModalPropsType = {
  title: string,
  isShowAcceptModal: (toggle: boolean) => void,
  deleteGroup: (title: string) => void,
  selectedGroupId: string,
  deleteGroupFetch: (uuid: string, title: string) => void,
  getGroupsFetch: () => void,

}

const AcceptModal: React.FC<AcceptModalPropsType> = (props: AcceptModalPropsType) => {
  const { title, isShowAcceptModal, deleteGroup, getGroupsFetch, selectedGroupId, deleteGroupFetch } = props
  const { t } = useTranslation()

  const handleCloseAcceptModal = () => {
    isShowAcceptModal(false)
  }

  const handleDeleteGroup = () => {
    deleteGroupFetch(selectedGroupId, title)
    isShowAcceptModal(false)
  }

  return (
    <div className={style.accept_modal__container}>
      <div className={style.accept_modal}>
        <div className={style.accept_modal__content}>
          <p>
            {t('are you sure--start')}
            <span>{title}</span>
            {t('are you sure--end')}
          </p>
          <div className={style.buttons_block}>
            <button onClick={handleDeleteGroup} type='button'>
              {t('yes')}
            </button>
            <button onClick={handleCloseAcceptModal} type='button'>
              {t('no')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcceptModal

import React from 'react'
import { useTranslation } from 'react-i18next'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormsControls/FormControls'
import SVGIcon from '../../../SVGIcons'
import style from './ModalAdd.module.scss'
import { required, maxLengthCreator } from '../../../utils/validators'

const maxLength = maxLengthCreator(20)

type ModalAddPropsTypes = {
  handleCloseModal: (isShowAcceptModal: any) => void,
  onAddGroup: (group: string) => void,
  toggleModal: (toggle: boolean) => void,
}


// MODALADD
const ModalAdd: React.FC<ModalAddPropsTypes> = (props: ModalAddPropsTypes) => {
  const { handleCloseModal, onAddGroup, toggleModal } = props

  const addAndSelectGroup = (value: any) => {
    onAddGroup(value)
  }
  const closeModalOnEsc = (e: any) => {
    if (e.keyCode === 27) {
      toggleModal(false)
    }
  }

  return (
    <div
      onKeyDown={closeModalOnEsc}
      tabIndex={0}
      role='button'
      id='modal'
      onClick={handleCloseModal}
      className={style.addGroup__popup_container}
    >
      <GroupReduxForm onSubmit={addAndSelectGroup} />
    </div>
  )
}

// FORM
const GroupForm = (props: any) => {
const { handleSubmit } = props

  const { t } = useTranslation()

  const submitOnEnter = (event: any) => {
    if (event.which === 13 || event.keyCode === 13) {
      handleSubmit()
    }
  }

  return (
    <form onKeyPress={submitOnEnter} onSubmit={handleSubmit}>
      <div>
        <div id='popup' className={style.content}>
          <Field
            validate={[required, maxLength]}
            placeholder={t('Enter name')}
            component={Input}
            name='customInput'
            autoFocus='true'
          />

          <button onClick={handleSubmit} type='submit'>
            <SVGIcon className={style.checkMark_btn__icon} name='checkMark' />
          </button>
        </div>
      </div>
    </form>
  )
}

const GroupReduxForm = reduxForm({ form: 'my redux form' })(GroupForm)

export default ModalAdd

import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormsControls/FormControls'
import SVGIcon from '../../../SVGIcons'
import style from './ModalAdd.module.scss'
import { required, maxLengthCreator } from '../../../utils/validators'

const maxLength = maxLengthCreator(20)

type ModalAddPropsTypes = {
  handleCloseModal: (isShowAcceptModal: any) => void,
  showModal: boolean,
  onAddGroup: (group: string) => void,
  toggleModal: (toggle: boolean) => void, 
}

type one = {

}

const ModalAdd = (props: any) => {
  const { handleCloseModal, showModal, onAddGroup, toggleModal } = props

  const addAndSelectGroup = (value: any) => {
    onAddGroup(value)
  }

  const closeModalOnEsc = (event: any) => {
    if (event.keyCode === 27) {
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
      // isOpen={showModal}
    >
      <GroupReduxForm onSubmit={addAndSelectGroup} />
    </div>
  )
}

const GroupForm = (props: any) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div id='popup' className={style.content}>
          <Field
            validate={[required, maxLength]}
            placeholder='Enter name of group'
            component={Input}
            name='customInput'
            autoFocus='true'  
          />

          <button type='submit'>
            <SVGIcon className={style.checkMark_btn__icon} name='checkMark' />
          </button>
        </div>
      </div>
    </form>
  )
}

const GroupReduxForm = reduxForm({ form: 'my redux form' })(GroupForm)

export default ModalAdd

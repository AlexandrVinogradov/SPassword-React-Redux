import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import style from './EditMode.module.scss'
import { Input } from '../../../common/FormsControls/FormControls'
import { AppStateType } from '../../../../redux/store'

type EditModePropsTypes = {
  updateLogin: (values: string) => void,
  editModeToggle: boolean,
  isEditMode: (toggle: boolean) => void,
  login: string,
  password: string,
}
type EditModeFormProps = {
  handleSubmit: (value: any) => void,
}

const EditMode: React.FC<EditModePropsTypes> = props => {
  const { updateLogin, editModeToggle, isEditMode, login, password } = props

  const getInitialValues = () => {
    return {
      customLoginInput: login,
      customPasswordInput: password,
    }
  }

  const handleExitEditMode = (values: any) => {
    updateLogin(values)
    props.isEditMode(!props.editModeToggle)
  }

  return (
    <div className={style.edit_mode}>
      <EditModeReduxForm
        getInitialValues={getInitialValues}
        editModeToggle={editModeToggle}
        isEditMode={isEditMode}
        onSubmit={handleExitEditMode}
      />
    </div>
  )
}

const EditModeForm = (props: EditModeFormProps) => {
  const { handleSubmit } = props

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Field placeholder='Enter login' component={Input} name='customLoginInput' />
      <Field placeholder='Enter password' component={Input} name='customPasswordInput' />
      <button className={style.edit_button} type='submit'>
        Edit
      </button>
    </form>
  )
}

console.log('MAKE BEAUTY');

type MapStatePropsTypes = {
  initialValues: () => void,
  enableReinitialize: boolean,
}
const mapStateToProps = (state: AppStateType, props: any): MapStatePropsTypes => ({
  initialValues: props.getInitialValues(),
  enableReinitialize: true,
})
const EditModeReduxForm = connect(mapStateToProps)(
  reduxForm({ form: 'my redux form', enableReinitialize: true })(EditModeForm)
)

export default EditMode

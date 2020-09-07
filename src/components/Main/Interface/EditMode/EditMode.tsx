import React from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Field, reduxForm } from 'redux-form'
import style from './EditMode.module.scss'
import { Input } from '../../../common/FormsControls/FormControls'
import { AppStateType } from '../../../../redux/store'
import { spaceDetect } from '../../../../utils/validators'

type EditModePropsTypes = {
  updateLogin: (values: string) => void,
  isEditMode: boolean,
  editModeToggle: (toggle: boolean) => void,
  login: string | null,
  password: string | null,
  updateLoginFetch: (uuid: string, name: string, login: any) => void,
  selectedGroupId: string,
  title: string,
}
type EditModeFormProps = {
  handleSubmit: (value: any) => void,
}

const EditMode: React.FC<EditModePropsTypes> = props => {
  const { updateLogin, editModeToggle, isEditMode, login, password, selectedGroupId, title, updateLoginFetch } = props

  const getInitialValues = () => {
    return {
      customLoginInput: login,
      customPasswordInput: password,
    }
  }

  const handleExitEditMode = (values: any) => {
    updateLogin(values)
    updateLoginFetch(selectedGroupId, title, values)
    editModeToggle(!isEditMode)
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
  const { t } = useTranslation()

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Field placeholder={t('Enter login')} component={Input} validate={[spaceDetect]} name='customLoginInput' />
      <Field placeholder={t('Enter password')} component={Input} validate={[spaceDetect]} name='customPasswordInput' />
      <button className={style.edit_button} type='submit'>
        {t('Edit')}
      </button>
    </form>
  )
}

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

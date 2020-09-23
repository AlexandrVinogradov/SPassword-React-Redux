import React from 'react'
import { WrappedFieldProps } from 'redux-form'
import s from './FormControls.module.scss'

type InputPropsTypes = {
  input: any,
  meta: WrappedFieldProps,
  placeholder: string,
  autoFocus: boolean,
  className: string,
  active: boolean,
  type: string,
}
type InputTypes = WrappedFieldProps & InputPropsTypes

export const Input: React.FC<any> = (props: InputTypes) => {
  const { input, meta, placeholder, autoFocus, className, active, type } = props
  const hasError = meta.touched && meta.error
  return (
    <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
      <div>
        <input
          autoFocus={autoFocus}
          placeholder={placeholder}
          className={className}
          active={active}
          type={type}
          {...input}
          {...meta}
        />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

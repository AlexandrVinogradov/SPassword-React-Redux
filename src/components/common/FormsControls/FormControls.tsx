import React from 'react'
import { WrappedFieldsProps, BaseFieldProps } from 'redux-form'
import s from './FormControls.module.scss'

type FormControlTypes = {
  meta: {
    touched: boolean,
    error: string,
  },
  input: any,
  placeholder: any,
  autoFocus: any,
  component: any
}

export const Textarea: React.FC<FormControlTypes> = (input: any, meta: any) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
      <div>
        <textarea {...input} {...meta} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Input = (input: any, meta: any, ...props: any ) => {
  const hasError = meta.touched && meta.error
  const { placeholder, autoFocus } = props
  return (
    <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
      <div>
        <input autoFocus={autoFocus} placeholder={placeholder} type='text' {...input} {...meta} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

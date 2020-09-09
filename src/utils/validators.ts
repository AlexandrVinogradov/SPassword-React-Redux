export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = value => {
  if (value) return undefined

  return 'the field is required'
}

export const maxLengthCreator = (maxLength: number): FieldValidatorType => value => {
  if (value.length > maxLength) return `max length is ${maxLength} symbols`

  return undefined
}

export const spaceDetect: FieldValidatorType = value => {
  if (value && value.match(/\s/)) return 'oh, space is not allowed'

  return undefined
}

export const email: FieldValidatorType = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined

export const minLength = (min: number): FieldValidatorType => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined


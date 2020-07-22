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

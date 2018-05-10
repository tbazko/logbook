import { getValidationError } from 'selectors'

export const getAddItemFormError = state => getValidationError(state)
export { getActivityTypes, getHistoricalActivityTypes } from 'selectors'

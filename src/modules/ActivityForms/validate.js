import _ from 'lodash'
import { getStore } from 'store'
import * as errors from './errors'

export default function validate(title) {
  const store = getStore()
  const { activityTypes, historicalActivityTypes } = store.getState()

  if (isEmptyString(title)) {
    throw new errors.EmptyTitleError()
  }

  if (!isUniqueTitle(title, activityTypes)) {
    throw new errors.NotUniqueTitleError()
  }

  if (!isUniqueTitle(title, historicalActivityTypes)) {
    throw new errors.NotUniqueTitleError()
  }
}

function isEmptyString(str) {
  return str.length === 0
}

function isUniqueTitle(title, activityTypes) {
  if (!activityTypes) return true
  const hItems = _.keys(activityTypes).map(key => activityTypes[key])
  return !hItems.find(item => item.title.toLowerCase() === title.toLowerCase())
}

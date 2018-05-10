import _ from 'lodash'
import * as types from 'types'

const initialState = null

export default (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case types.AddActivityForm.ADD_ACTIVITY_TYPE:
    case types.ActivityCheckList.TOGGLE_ITEM_CHECKBOX:
      return toggleCompletedForOne(state, action)
    case types.ActivityCheckListHeader.SHOW_NEXT_DATE:
    case types.ActivityCheckList.SET_DEFAULT_VALUES:
      return setCompletedToDefaultIfDoesNotExist(state, action)
    default:
      return state
  }
}

const toggleCompletedForOne = (state, action) => ({
  ...state,
  [action.createdAt]: {
    ..._.get(state, `[${action.createdAt}]`, undefined),
    [action.id]: {
      completed: !_.get(state, `[${action.createdAt}][${action.id}].completed`, true),
    },
  },
})

const setCompletedToDefaultIfDoesNotExist = (state, action) => {
  const activityLogs = {}

  if (state && state[action.timestamp]) return state
  if (!action.activityTypes) return state

  Object.keys(action.activityTypes).forEach((item) => {
    activityLogs[item] = { completed: false }
  })

  return {
    ...state,
    [action.timestamp]: activityLogs,
  }
}

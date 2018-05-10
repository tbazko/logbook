import * as types from 'types'

export const toggleItemCheckbox = (id, createdAt) =>
  ({ type: types.ActivityCheckList.TOGGLE_ITEM_CHECKBOX, id, createdAt })

export const removeListItem = (id, activityType) =>
  ({ type: types.ActivityCheckList.REMOVE_LIST_ITEM, id, activityType })
export const removeAll = () => ({ type: types.ActivityCheckList.REMOVE_ALL })


export const checkAll = timestamp => ({ type: types.ActivityCheckList.CHECK_ALL, timestamp })
export const uncheckAll = timestamp => ({ type: types.ActivityCheckList.UNCHECK_ALL, timestamp })
export const setDefaultCheckboxValue = (timestamp, activityTypes) =>
  ({ type: types.ActivityCheckList.SET_DEFAULT_VALUES, timestamp, activityTypes })

export const setActiveCheckList = timestamp => ({
  type: types.ActivityCheckList.SET_ACTIVE_CHECKLIST,
  timestamp,
})


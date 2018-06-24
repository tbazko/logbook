import uuid from 'react-native-uuid'
import moment from 'moment'
import * as types from 'types'

export const addItem = title => ({
  type: types.ActivityForm.ADD_ACTIVITY_TYPE,
  id: uuid.v1(),
  title,
  createdAt: moment().startOf('day').format(),
})

export const editItem = (id, payload) => ({
  type: types.ActivityForm.EDIT_ACTIVITY_TYPE,
  id,
  payload,
})

export const setViewMode = viewMode => ({
  type: types.ActivityCheckListHeader.SET_VIEW_MODE,
  viewMode,
})

export const addItemError = error => ({ type: types.ActivityForm.ADD_ACTIVITY_ERROR, error })
export const removeItemError = () => ({ type: types.ActivityForm.REMOVE_ACTIVITY_ERROR })

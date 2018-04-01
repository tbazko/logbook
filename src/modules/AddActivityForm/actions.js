import uuid from 'react-native-uuid'
import moment from 'moment'
import * as types from 'types'

export const addItem = title => ({
  type: types.AddActivityForm.ADD_ACTIVITY_TYPE,
  id: uuid.v1(),
  title,
  timestamp: moment().startOf('day').unix(),
})
export const addItemError = error => ({ type: types.AddActivityForm.ADD_ACTIVITY_ERROR, error })

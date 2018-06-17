import * as types from 'types'
import moment from 'moment'

const initialState = moment().startOf('day').format()

export default (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case types.ActivityCheckListHeader.SHOW_PREV_DATE:
    case types.ActivityCheckListHeader.SHOW_NEXT_DATE:
    case types.ActivityCheckList.SET_ACTIVE_CHECKLIST:
      return action.timestamp
    case types.DevTools.REMOVE_ALL_DATA:
      return initialState
    default:
      return state
  }
}

import * as types from 'types'
import moment from 'moment'

export const showPrevDate = timestamp => ({
  type: types.ActivityCheckListHeader.SHOW_PREV_DATE,
  timestamp: moment.unix(timestamp).add(-1, 'days').startOf('day').unix(),
})

export const showNextDate = (timestamp, activityTypes) => ({
  type: types.ActivityCheckListHeader.SHOW_NEXT_DATE,
  timestamp: moment.unix(timestamp).add(1, 'days').startOf('day').unix(),
  activityTypes,
})

export const setViewMode = viewMode => ({
  type: types.ActivityCheckListHeader.SET_VIEW_MODE,
  viewMode,
})

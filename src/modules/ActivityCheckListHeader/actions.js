import * as types from 'types'
import moment from 'moment'

export const showPrevDate = timestamp => ({
  type: types.ActivityCheckListHeader.SHOW_PREV_DATE,
  timestamp: moment(timestamp).add(-1, 'days').startOf('day').format(),
})

export const showNextDate = (timestamp, activityTypes) => ({
  type: types.ActivityCheckListHeader.SHOW_NEXT_DATE,
  timestamp: moment(timestamp).add(1, 'days').startOf('day').format(),
  activityTypes,
})

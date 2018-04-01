import * as types from 'types'
import moment from 'moment'

export const showPrevDate = (timestamp, activityTypes) => ({
  type: types.HomeHeader.SHOW_PREV_DATE,
  timestamp: moment.unix(timestamp).add(-1, 'days').startOf('day').unix(),
  activityTypes,
})

export const showNextDate = timestamp => ({
  type: types.HomeHeader.SHOW_NEXT_DATE,
  timestamp: moment.unix(timestamp).add(1, 'days').startOf('day').unix(),
})

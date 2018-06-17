import _ from 'lodash'
import moment from 'moment'
import { createSelector } from 'reselect'
import { getActivityLogs } from 'selectors'

export const getEarliestTimestamp = state => (_.keys(getActivityLogs(state))[0])

let successStyles
export function setStylesForSuccessDates(styles) {
  successStyles = styles
}

export const getSuccessDates = createSelector(
  [getActivityLogs],
  (activityLogs) => {
    if (!activityLogs) return {}
    const sorted = {}
    Object.keys(activityLogs).forEach((log) => {
      const logItems = activityLogs[log]
      Object.keys(logItems).forEach((item) => {
        if (logItems[item].completed) {
          sorted[item] = {
            ...sorted[item],
            [moment(log).format('YYYY-MM-DD')]: successStyles,
          }
        }
      })
    })
    return sorted
  },
)

export { getActivityTypes } from 'selectors'

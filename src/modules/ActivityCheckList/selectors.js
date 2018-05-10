import _ from 'lodash'
import { createSelector } from 'reselect'
import {
  getActivityTypes,
  getActivityLogs,
  getActiveLogTimestamp,
  getHistoricalActivityTypes,
} from 'selectors'

export const getActiveCheckListId = state => getActiveLogTimestamp(state)

export const getActiveCheckList = createSelector(
  [getActivityLogs, getActiveLogTimestamp, getActivityTypes, getHistoricalActivityTypes],
  (activityLogs, activeLogTimestamp, activityTypes, historicalActivityTypes) => {
    const activeCheckList = { timestamp: activeLogTimestamp, activities: [] }
    if (!activityLogs || !activityLogs[activeLogTimestamp]) return activeCheckList

    Object.keys(activityLogs[activeLogTimestamp]).forEach((itemId) => {
      activeCheckList.activities.push({
        id: itemId,
        title: _.get(activityTypes, `[${itemId}].title`, false) || _.get(historicalActivityTypes, `[${itemId}].title`, false) || 'Unknown',
        completed: activityLogs[activeLogTimestamp][itemId].completed,
        isHistorical: Boolean(_.get(historicalActivityTypes, `[${itemId}].title`, false)),
      })
    })
    return activeCheckList
  },
)

export {
  getActivityTypes,
  getActivityLogs,
  getActiveLogTimestamp,
  getHistoricalActivityTypes,
  getCheckListMode,
} from 'selectors'

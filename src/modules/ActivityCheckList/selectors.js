import _ from 'lodash'
import { createSelector } from 'reselect'

const getLogs = state => state.activityLogs
export const getActiveCheckListId = state => state.activeDateTimestamp
export const getActivityTypes = state => state.activityTypes
const getHistoricalItems = state => state.historicalActivityTypes

export const getActiveCheckList = createSelector(
  [getLogs, getActiveCheckListId, getActivityTypes, getHistoricalItems],
  (activityLogs, activeDateTimestamp, activityTypes, historicalActivityTypes) => {
    const activeCheckList = { timestamp: activeDateTimestamp, activities: [] };
    if (!activityLogs || !activityLogs[activeDateTimestamp]) return activeCheckList;

    Object.keys(activityLogs[activeDateTimestamp]).forEach((itemId) => {
      activeCheckList.activities.push({
        id: itemId,
        title: _.get(activityTypes[itemId], 'title', false) || _.get(historicalActivityTypes[itemId], 'title', false) || 'Unknown',
        completed: activityLogs[activeDateTimestamp][itemId].completed,
        isHistorical: Boolean(_.get(historicalActivityTypes[itemId], 'title', false)),
      })
    })
    return activeCheckList
  },
)

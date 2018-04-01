import moment from 'moment'
import _ from 'lodash'
import { createSelector } from 'reselect'

const getLogs = state => state.activityLogs
const getActivityTypes = state => state.activityTypes

export const getWeeksWithDays = createSelector(
  [getLogs],
  (activityLogs) => {
    const logTimestamps = _.keys(activityLogs)
    return groupByWeek(logTimestamps)
  },
)

export const getCompletedPerWeek = createSelector(
  [getLogs, getActivityTypes, getWeeksWithDays],
  (activityLogs, activityTypes, weeksWithDays) => {
    const itemIds = _.keys(activityTypes)
    const completedData = {}

    itemIds.forEach((id) => {
      const weeksWithCompletedDays = formatCompletedPerWeek(id, weeksWithDays, activityLogs);
      const { title } = activityTypes[id]
      completedData[title] = weeksWithCompletedDays
    })
    return completedData
  },
)

function formatCompletedPerWeek(id, weeksWithDays, activityLogs) {
  const weeksWithCompletedDays = []
  _.keys(weeksWithDays).forEach((weekNumber) => {
    weeksWithCompletedDays.push({
      week: weekNumber,
      completed: filterCompletedPerTimePeriod(id, weeksWithDays[weekNumber], activityLogs).length,
    })
  })
  return weeksWithCompletedDays
}

function filterCompletedPerTimePeriod(id, timestamps, activityLogs) {
  return timestamps.filter(timestamp => _.get(activityLogs, `[${timestamp}][${id}].completed`, 0))
}

function groupByWeek(logTimestamps) {
  const groupedByWeek = {}
  logTimestamps.forEach((timestamp) => {
    const weekNumber = moment.unix(timestamp).week()
    if (!groupedByWeek[weekNumber]) groupedByWeek[weekNumber] = []
    return groupedByWeek[weekNumber].push(timestamp)
  })
  return groupedByWeek
}

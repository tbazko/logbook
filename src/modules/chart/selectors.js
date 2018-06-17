import moment from 'moment'
import _ from 'lodash'
import { createSelector } from 'reselect'
import { getActivityTypes, getActivityLogs } from 'selectors'

export const getWeeksWithDays = createSelector(
  [getActivityLogs],
  (activityLogs) => {
    const logTimestamps = _.keys(activityLogs)
    return groupByWeek(logTimestamps)
  },
)

export const getCompletedPerWeek = createSelector(
  [getActivityLogs, getActivityTypes, getWeeksWithDays],
  (activityLogs, activityTypes, weeksWithDays) => {
    const itemIds = _.keys(activityTypes)
    const completedData = {}

    itemIds.forEach((id) => {
      const weeksWithCompletedDays = formatCompletedPerWeek(id, weeksWithDays, activityLogs)
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
      week: formatWeekToString(weekNumber),
      completed: filterCompletedPerTimePeriod(id, weeksWithDays[weekNumber], activityLogs).length,
    })
  })
  return weeksWithCompletedDays
}

function formatWeekToString(weekNumber) {
  const firstDay = moment().week(weekNumber).startOf('isoWeek')
  const lastDay = moment().week(weekNumber).endOf('isoWeek')
  const daysAreInSameMonth = firstDay.month() === lastDay.month()
  const firstDayStr = daysAreInSameMonth ? firstDay.format('D') : firstDay.format('D MMM')
  const lastDayStr = lastDay.format('D MMM')

  return `${firstDayStr} - ${lastDayStr}`
}

function filterCompletedPerTimePeriod(id, timestamps, activityLogs) {
  return timestamps.filter(timestamp => _.get(activityLogs, `[${timestamp}][${id}].completed`, 0))
}

function groupByWeek(logTimestamps) {
  const groupedByWeek = {}
  logTimestamps.forEach((timestamp) => {
    const weekNumber = moment(timestamp).week()
    if (!groupedByWeek[weekNumber]) groupedByWeek[weekNumber] = []
    return groupedByWeek[weekNumber].push(timestamp)
  })
  return groupedByWeek
}

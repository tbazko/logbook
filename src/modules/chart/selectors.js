import moment from 'moment'
import _ from 'lodash'
import { createSelector } from 'reselect'

const getLogs = state => state.checkList.logs
const getItems = state => state.checkList.items

export const getWeeksWithDays = createSelector(
  [getLogs],
  (logs) => {
    const logTimestamps = _.keys(logs)
    return groupByWeek(logTimestamps)
  },
)

export const getCompletedPerWeek = createSelector(
  [getLogs, getItems, getWeeksWithDays],
  (logs, items, weeksWithDays) => {
    const itemIds = _.keys(items)
    const completedData = {}

    itemIds.forEach((id) => {
      const weeksWithCompletedDays = formatCompletedPerWeek(id, weeksWithDays, logs);
      const { title } = items[id]
      completedData[title] = weeksWithCompletedDays
    })
    return completedData
  },
)

function formatCompletedPerWeek(id, weeksWithDays, logs) {
  const weeksWithCompletedDays = []
  _.keys(weeksWithDays).forEach((weekNumber) => {
    weeksWithCompletedDays.push({
      week: weekNumber,
      completed: filterCompletedPerTimePeriod(id, weeksWithDays[weekNumber], logs).length,
    })
  })
  return weeksWithCompletedDays
}

function filterCompletedPerTimePeriod(id, timestamps, logs) {
  return timestamps.filter(timestamp => logs[timestamp][id].completed)
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

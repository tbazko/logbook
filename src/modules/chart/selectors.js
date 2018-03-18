import moment from 'moment'
import _ from 'lodash'


export function selectWeeks(state) {
  return _.keys(selectWeeksWithDays(state))
}

export function selectWeeksAmount(state) {
  return _.keys(selectWeeksWithDays(state)).length
}

export function selectWeeksWithDays(state) {
  const logTimestamps = _.keys(state.checkList.logs)
  return groupByWeek(logTimestamps)
}

export function selectCompletedPerWeek(state) {
  const { logs, items } = state.checkList
  const weeksWithDays = selectWeeksWithDays(state)
  const itemIds = _.keys(items)
  const completedData = {}

  itemIds.forEach((id) => {
    const weeksWithCompletedDays = formatCompletedPerWeek(id, weeksWithDays, logs);
    const { title } = state.checkList.items[id]
    completedData[title] = weeksWithCompletedDays
  })
  return completedData
}

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

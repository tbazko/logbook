import moment from 'moment'
import _ from 'lodash';


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

function groupByWeek(logTimestamps) {
  const groupedByWeek = {}
  logTimestamps.forEach((timestamp) => {
    const weekNumber = moment.unix(timestamp).week()
    if (!groupedByWeek[weekNumber]) groupedByWeek[weekNumber] = []
    return groupedByWeek[weekNumber].push(timestamp)
  });
  return groupedByWeek
}

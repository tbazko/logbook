import moment from 'moment'
import * as types from 'types'

export const resetStore = () => ({
  type: types.DevTools.REMOVE_ALL_DATA,
})

const todayTS = moment().startOf('day').format()
const activityTypes = {
  'Yoga-Id': {
    title: 'Yoga',
  },
  'Sport-Id': {
    title: 'Sport',
  },
  'Vega-Id': {
    title: 'Vega',
  },
  'Meat-Id': {
    title: 'Meat',
  },
  'Alco-Id': {
    title: 'Alco',
  },
}

export const insertData = () => ({
  type: types.DevTools.INSERT_DATA,
  payload: {
    activityTypes,
    activityLogs: getActivityLogs(),
    activeLogTimestamp: todayTS,
  },
})

export function getActivityLogs() {
  const logs = {}

  for (let i = 0; i < 60; i++) {
    logs[moment(todayTS).subtract(i, 'day').format()] = {
      'Sport-Id': {
        completed: parseInt(Math.random() * 10, 10) > 5,
      },
      'Vega-Id': {
        completed: parseInt(Math.random() * 10, 10) > 5,
      },
      'Meat-Id': {
        completed: parseInt(Math.random() * 10, 10) > 5,
      },
      'Alco-Id': {
        completed: parseInt(Math.random() * 10, 10) > 5,
      },
      'Yoga-Id': {
        completed: parseInt(Math.random() * 10, 10) > 5,
      },
    }
  }

  return logs
}

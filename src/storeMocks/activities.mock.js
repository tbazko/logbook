import moment from 'moment'

export default {
  historicalActivityTypes: {
    'Yoga-Id': {
      title: 'Yoga',
    },
  },
  activityTypes: {
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
    'Just-Added-Id': {
      title: 'Just Added Activity',
    },
  },
  activityLogs: {
    // -------- Week 5 Start ---------
    [moment.unix(1517353200).format()]: {
      'Sport-Id': {
        completed: false,
      },
      'Vega-Id': {
        completed: false,
      },
      'Meat-Id': {
        completed: false,
      },
      'Alco-Id': {
        completed: false,
      },
    },
    [moment.unix(1517439600).format()]: {
      'Sport-Id': {
        completed: false,
      },
      'Vega-Id': {
        completed: false,
      },
      'Meat-Id': {
        completed: true,
      },
      'Alco-Id': {
        completed: true,
      },
    },
    [moment.unix(1517526000).format()]: {
      'Sport-Id': {
        completed: true,
      },
      'Vega-Id': {
        completed: false,
      },
      'Meat-Id': {
        completed: false,
      },
      'Alco-Id': {
        completed: false,
      },
    },
    [moment.unix(1517612400).format()]: {
      'Sport-Id': {
        completed: true,
      },
      'Vega-Id': {
        completed: false,
      },
      'Meat-Id': {
        completed: false,
      },
      'Alco-Id': {
        completed: true,
      },
    },
    // -------- Week 6 Start ---------
    [moment.unix(1517698800).format()]: {
      'Sport-Id': {
        completed: false,
      },
      'Vega-Id': {
        completed: true,
      },
      'Meat-Id': {
        completed: true,
      },
      'Alco-Id': {
        completed: false,
      },
    },
    [moment.unix(1517785200).format()]: {
      'Sport-Id': {
        completed: true,
      },
      'Vega-Id': {
        completed: false,
      },
      'Meat-Id': {
        completed: false,
      },
      'Alco-Id': {
        completed: true,
      },
    },
    [moment.unix(1517871600).format()]: {
      'Sport-Id': {
        completed: true,
      },
      'Vega-Id': {
        completed: false,
      },
      'Meat-Id': {
        completed: true,
      },
      'Alco-Id': {
        completed: false,
      },
    },
    [moment.unix(1517958000).format()]: {
      'Sport-Id': {
        completed: true,
      },
      'Vega-Id': {
        completed: true,
      },
      'Meat-Id': {
        completed: false,
      },
      'Alco-Id': {
        completed: false,
      },
    },
    [moment.unix(1518044400).format()]: {
      'Sport-Id': {
        completed: true,
      },
      'Vega-Id': {
        completed: false,
      },
      'Meat-Id': {
        completed: false,
      },
      'Alco-Id': {
        completed: false,
      },
    },
    [moment.unix(1518130800).format()]: {
      'Sport-Id': {
        completed: true,
      },
      'Vega-Id': {
        completed: false,
      },
      'Meat-Id': {
        completed: false,
      },
      'Alco-Id': {
        completed: false,
      },
    },
    [moment.unix(1518217200).format()]: {
      'Sport-Id': {
        completed: false,
      },
      'Vega-Id': {
        completed: true,
      },
      'Meat-Id': {
        completed: false,
      },
      'Alco-Id': {
        completed: true,
      },
    },
    // -------- Week 7 Start ---------
    [moment.unix(1518303600).format()]: {
      'Sport-Id': {
        completed: false,
      },
      'Vega-Id': {
        completed: true,
      },
      'Meat-Id': {
        completed: false,
      },
      'Alco-Id': {
        completed: true,
      },
      'Yoga-Id': {
        completed: true,
      },
      'Just-Added-Id': {
        completed: false,
      },
    },
  },
  activeLogTimestamp: moment.unix(1518303600).format(),
}

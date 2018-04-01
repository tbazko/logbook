import activities from 'storeMocks/activities.mock'
import * as s from '../selectors'

describe('CheckList selectors', () => {
  it('should return empty item list', () => {
    const initialState = {
      activityTypes: null,
      activityLogs: null,
    }
    expect(s.getActiveCheckList(initialState)).toEqual({ activities: [], timestamp: undefined })
  })

  it('should select and return active activities', () => {
    const state = activities
    expect(s.getActiveCheckList(state)).toEqual({
      timestamp: 1518303600,
      activities: [
        {
          id: 'Sport-Id',
          title: 'Sport',
          completed: false,
          isHistorical: false,
        },
        {
          id: 'Vega-Id',
          title: 'Vega',
          completed: true,
          isHistorical: false,
        },
        {
          id: 'Meat-Id',
          title: 'Meat',
          completed: false,
          isHistorical: false,
        },
        {
          id: 'Alco-Id',
          title: 'Alco',
          completed: true,
          isHistorical: false,
        },
        {
          id: 'Yoga-Id',
          title: 'Yoga',
          completed: true,
          isHistorical: true,
        },
        {
          id: 'Just-Added-Id',
          title: 'Just Added Activity',
          completed: false,
          isHistorical: false,
        },
      ],
    })
  })
})

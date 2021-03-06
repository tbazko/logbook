import activities from 'storeMocks/activities.mock'
import * as s from '../selectors'

describe('Charts selectors', () => {
  const state = activities

  it('should return object with weeks containing arrays of day timestamps', () => {
    expect(s.getWeeksWithDays(state)).toEqual({
      5: [
        '1517353200',
        '1517439600',
        '1517526000',
        '1517612400',
      ],
      6: [
        '1517698800',
        '1517785200',
        '1517871600',
        '1517958000',
        '1518044400',
        '1518130800',
        '1518217200',
      ],
      7: [
        '1518303600',
      ],
    })
  })

  it('should return empty object if there is no data available', () => {
    const initialState = {
      activityTypes: null,
      activityLogs: null,
    }
    expect(s.getCompletedPerWeek(initialState)).toEqual({})
  })

  it('should return data ready for the chart, completed times per week for specific activity', () => {
    expect(s.getCompletedPerWeek(state).Sport).toEqual([
      { week: '29 Jan - 4 Feb', completed: 2 },
      { week: '5 - 11 Feb', completed: 5 },
      { week: '12 - 18 Feb', completed: 0 },
    ])

    expect(s.getCompletedPerWeek(state)['Just Added Activity']).toEqual([
      { week: '29 Jan - 4 Feb', completed: 0 },
      { week: '5 - 11 Feb', completed: 0 },
      { week: '12 - 18 Feb', completed: 0 },
    ])
  })
})

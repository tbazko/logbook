import state from 'storeMocks/activities.mock'
import * as s from '../selectors'

describe('ActivityCalendar selectors', () => {
  it('should return empty object', () => {
    const initialState = {
      activityTypes: null,
      activityLogs: null,
    }
    expect(s.getSuccessDates(initialState)).toEqual({})
  })

  it('should select and return completed logs sorted by type in Activity calendar format', () => {
    s.setStylesForSuccessDates({ color: 'black' })
    expect(s.getSuccessDates(state))
      .toHaveProperty('Sport-Id', {
        '2018-02-02': { color: 'black' },
        '2018-02-03': { color: 'black' },
        '2018-02-05': { color: 'black' },
        '2018-02-06': { color: 'black' },
        '2018-02-07': { color: 'black' },
        '2018-02-08': { color: 'black' },
        '2018-02-09': { color: 'black' },
      })
  })
})

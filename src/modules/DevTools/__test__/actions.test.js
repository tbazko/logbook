import moment from 'moment'
import * as action from '../actions'

describe('ActivityForm actions', () => {
  it('should return correct activityLogs', async () => {
    const activityLogs = action.getActivityLogs()
    const todayTS = moment().startOf('day')
    const prevMonthTS = moment().subtract(1, 'month').startOf('day')
    // console.log(moment().startOf('day'))
    // console.log(moment().subtract(1, 'month').startOf('day'))

    expect(Object.keys(activityLogs).length).toEqual(60)
    expect(activityLogs).toHaveProperty(
      todayTS.format(),
      expect.objectContaining({
        'Yoga-Id': { completed: expect.any(Boolean) },
        'Sport-Id': { completed: expect.any(Boolean) },
        'Vega-Id': { completed: expect.any(Boolean) },
        'Meat-Id': { completed: expect.any(Boolean) },
        'Alco-Id': { completed: expect.any(Boolean) },
      }),
    )

    expect(activityLogs).toHaveProperty(
      prevMonthTS.format(),
      expect.objectContaining({
        'Yoga-Id': { completed: expect.any(Boolean) },
        'Sport-Id': { completed: expect.any(Boolean) },
        'Vega-Id': { completed: expect.any(Boolean) },
        'Meat-Id': { completed: expect.any(Boolean) },
        'Alco-Id': { completed: expect.any(Boolean) },
      }),
    )
  })
})

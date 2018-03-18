import checkList from 'storeMocks/checklist.mock'
import * as s from '../selectors'

describe('Charts selectors', () => {
  const state = checkList

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

  it('should return data ready for the chart, completed per week', () => {
    expect(s.getCompletedPerWeek(state).Sport).toEqual([
      { week: '5', completed: 2 },
      { week: '6', completed: 5 },
      { week: '7', completed: 0 },
    ])
  })
})

import checkList from 'storeMocks/checklist.mock'
import * as s from '../selectors'

describe('CheckList selectors', () => {
  it('should return empty item list', () => {
    const initialState = {
      checkList: {
        items: null,
        logs: null,
      },
    }
    expect(s.getActiveCheckList(initialState)).toEqual({ items: [], timestamp: undefined })
  })

  it('should select and return active checkList', () => {
    const state = checkList
    expect(s.getActiveCheckList(state)).toEqual({
      timestamp: 1518303600,
      items: [
        {
          id: 'Sport-Id',
          title: 'Sport',
          completed: false,
        },
        {
          id: 'Vega-Id',
          title: 'Vega',
          completed: true,
        },
        {
          id: 'Meat-Id',
          title: 'Meat',
          completed: false,
        },
        {
          id: 'Alco-Id',
          title: 'Alco',
          completed: true,
        },
        {
          id: 'Yoga-Id',
          title: 'Yoga',
          completed: true,
        },
      ],
    })
  })
})

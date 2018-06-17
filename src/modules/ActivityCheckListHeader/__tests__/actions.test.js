import moment from 'moment'
import mockStore from 'redux-mock-store'
import * as action from '../actions'

describe('ActivityForm actions', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  it('should dispatch SHOW_PREV_DATE with timestamp and activityTypes object', async () => {
    await store.dispatch(action.showPrevDate(moment.unix(1518303600).format()))
    expect(store.getActions()).toMatchSnapshot()
  })

  it('should dispatch SHOW_NEXT_DATE with timestamp and activityTypes object', async () => {
    await store.dispatch(action.showNextDate(moment.unix(1518303600).format(), { 'Sport-Id': { title: 'Sport' } }))
    expect(store.getActions()).toMatchSnapshot()
  })
})

import mockStore from 'redux-mock-store'
import * as action from '../actions'

describe('AddActivityForm actions', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  it('should dispatch SHOW_PREV_DATE with timestamp and activityTypes object', async () => {
    await store.dispatch(action.showPrevDate(1518303600))
    expect(store.getActions()).toMatchSnapshot()
  })

  it('should dispatch SHOW_NEXT_DATE with timestamp and activityTypes object', async () => {
    await store.dispatch(action.showNextDate(1518303600, { 'Sport-Id': { title: 'Sport' } }))
    expect(store.getActions()).toMatchSnapshot()
  })

  it('should dispatch SET_VIEW_MODE with "delete"', async () => {
    await store.dispatch(action.setViewMode('delete'))
    expect(store.getActions()).toMatchSnapshot()
  })

  it('should dispatch SET_VIEW_MODE with "edit"', async () => {
    await store.dispatch(action.setViewMode('edit'))
    expect(store.getActions()).toMatchSnapshot()
  })
})

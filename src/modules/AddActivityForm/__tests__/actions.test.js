import mockStore from 'redux-mock-store'
import * as action from '../actions'

describe('AddActivityForm actions', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  it('should dispatch "ADD_ACTIVITY_TYPE" with title "Test1" and id "1"', async () => {
    await store.dispatch(action.addItem('Test1'))
    expect(store.getActions()).toMatchSnapshot()
  })

  it('should dispatch "ADD_ACTIVITY_ERROR" with error', async () => {
    await store.dispatch(action.addItemError(new Error()))
    expect(store.getActions()).toMatchSnapshot()
  })
})

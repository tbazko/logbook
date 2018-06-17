import mockStore from 'redux-mock-store'
import * as action from '../actions'

describe('EditModeButton actions', () => {
  let store

  beforeEach(() => {
    store = mockStore()
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

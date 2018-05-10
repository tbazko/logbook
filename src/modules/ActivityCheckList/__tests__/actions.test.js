import mockStore from 'redux-mock-store'
import * as action from '../actions'

describe('ActivityCheckList actions', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  it('should dispatch "REMOVE_LIST_ITEM" with id "1"', async () => {
    await store.dispatch(action.removeListItem('1'))
    expect(store.getActions()).toMatchSnapshot()
  })

  it('should dispatch "REMOVE_ALL"', async () => {
    await store.dispatch(action.removeAll())
    expect(store.getActions()).toMatchSnapshot()
  })

  it('should dispatch "TOGGLE_ITEM_CHECKBOX" with id "1" and timestamp "timestamp-1"', async () => {
    await store.dispatch(action.toggleItemCheckbox('1', 'timestamp-1'))
    expect(store.getActions()).toMatchSnapshot()
  })
  it('should dispatch "CHECK_ALL" with timestamp "timestamp-2"', async () => {
    await store.dispatch(action.checkAll('timestamp-2'))
    expect(store.getActions()).toMatchSnapshot()
  })

  it.skip('should dispatch "UNCHECK_ALL" with timestamp "timestamp-3"', async () => {
    await store.dispatch(action.uncheckAll('timestamp-3'))
    expect(store.getActions()).toMatchSnapshot()
  })

  it('should dispatch "SET_DEFAULT_LOG_VALUES" with timestamp "timestamp-3"', async () => {
    await store.dispatch(action.setDefaultCheckboxValue('timestamp-3'))
    expect(store.getActions()).toMatchSnapshot()
  })

  it('should dispatch "SET_ACTIVE_CHECKLIST" with timestamp "timestamp-3"', async () => {
    await store.dispatch(action.setActiveCheckList('timestamp-3'))
    expect(store.getActions()).toMatchSnapshot()
  })
})

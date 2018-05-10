import * as types from 'types'
import reducer from '../activeLogTimestamp'

describe('activeLogTimestamp reducer', () => {
  let state

  it('should return 0 as activeLogTimestamp', () => {
    state = reducer(state, {
      type: 'TEST',
    })
    expect(state).toMatchSnapshot()
  })

  it('should set activeLogTimestamp to "active-timestamp"', () => {
    state = reducer(state, {
      type: types.ActivityCheckList.SET_ACTIVE_CHECKLIST,
      timestamp: 'active-timestamp',
    })
    expect(state).toMatchSnapshot()
  })
})

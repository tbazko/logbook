import * as types from 'types'
import reducer from '../activityCheckList'

describe('activityCheckList reducer', () => {
  let state

  it('should return "default" as activityCheckList.viewMode', () => {
    state = reducer(state, {
      type: 'TEST',
    })
    expect(state).toMatchSnapshot()
  })

  it('should return "delete" as activityCheckList.viewMode', () => {
    state = reducer(state, {
      type: types.ActivityCheckListHeader.SET_VIEW_MODE,
      viewMode: 'delete',
    })
    expect(state).toMatchSnapshot()
  })

  it('should return "edit" as activityCheckList.viewMode', () => {
    state = reducer(state, {
      type: types.ActivityCheckListHeader.SET_VIEW_MODE,
      viewMode: 'edit',
    })
    expect(state).toMatchSnapshot()
  })
})

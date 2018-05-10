import * as types from 'types'
import reducer from '../activityTypes'

describe('activityTypes reducer', () => {
  const initialState = null

  it('should return object with empty activityTypes', () => {
    const state = reducer(initialState, {
      type: 'TEST',
    })
    expect(state).toMatchSnapshot()
  })

  it('should add 3 objects to activityTypes', () => {
    let state = reducer(initialState, {
      type: types.AddActivityForm.ADD_ACTIVITY_TYPE,
      id: '1',
      title: 'Test 1',
    })
    state = reducer(state, {
      type: types.AddActivityForm.ADD_ACTIVITY_TYPE,
      id: '2',
      title: 'Test 2',
    })
    state = reducer(state, {
      type: types.AddActivityForm.ADD_ACTIVITY_TYPE,
      id: '3',
      title: 'Test 3',
    })
    expect(state).toMatchSnapshot()
  })

  it('should remove object "1" from "activityTypes"', () => {
    const state = reducer({ 1: { title: 'Test 1' }, 2: { title: 'Test 2' } }, {
      type: types.ActivityCheckList.REMOVE_LIST_ITEM,
      id: '1',
      activityType: { title: 'Test 1' },
    })
    expect(state).toMatchSnapshot()
  })

  it('should remove all elements and return null', () => {
    const state = reducer({ 1: { title: 'Test 1' }, 2: { title: 'Test 2' } }, {
      type: types.ActivityCheckList.REMOVE_ALL,
    })
    expect(state).toMatchSnapshot()
  })
})

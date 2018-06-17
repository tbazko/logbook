import * as types from 'types'
import reducer from '../validationError'

describe('CheckList Reducer', () => {
  const initialState = null

  it('should return object empty validationError', () => {
    const state = reducer(initialState, {
      type: 'TEST',
    })
    expect(state).toMatchSnapshot()
  })

  it('should reset to initial state (null)', () => {
    const state = reducer({ message: 'Some error' }, {
      type: types.ActivityForm.ADD_ACTIVITY_TYPE,
    })
    expect(state).toMatchSnapshot()
  })

  it('should add "Test error" error', () => {
    const state = reducer(initialState, {
      type: types.ActivityForm.ADD_ACTIVITY_ERROR,
      error: { message: 'Test error' },
    })
    expect(state).toMatchSnapshot()
  })
})

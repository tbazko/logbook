import * as types from 'types'
import reducer from '../historicalActivityTypes'

describe('CheckList Reducer', () => {
  const initialState = null;

  it('should return null for historicalActivityTypes', () => {
    const state = reducer(initialState, {
      type: 'TEST',
    });
    expect(state).toMatchSnapshot();
  });

  it('should add activityType "Sport" to "historicalActivityTypes"', () => {
    const state = reducer(initialState, {
      type: types.ActivityCheckList.REMOVE_LIST_ITEM,
      id: 'Sport-Id',
      activityType: { title: 'Sport' },
    });
    expect(state).toMatchSnapshot();
  });
});

import * as types from 'types'
import reducer from '../activityLogs'

describe('CheckList Reducer', () => {
  let state;

  it('should return null', () => {
    state = reducer(state, {
      type: 'TEST',
    });
    expect(state).toMatchSnapshot();
  });

  it('should save objects "2" and "3" in "activityLogs" under "timestamp-1"', () => {
    state = reducer(state, {
      type: types.ActivityCheckList.TOGGLE_ITEM_CHECKBOX,
      id: '2',
      timestamp: 'timestamp-1',
    });
    state = reducer(state, {
      type: types.ActivityCheckList.TOGGLE_ITEM_CHECKBOX,
      id: '3',
      timestamp: 'timestamp-1',
    });
    expect(state).toMatchSnapshot();
  });

  it('should save object "2" in "activityLogs" under timestamp "timestamp-2"', () => {
    state = reducer(state, {
      type: types.ActivityCheckList.TOGGLE_ITEM_CHECKBOX,
      id: '2',
      timestamp: 'timestamp-2',
    });
    expect(state).toMatchSnapshot();
  });

  // it('should set completed for all elements to true', () => {
  //   state = reducer(state, {
  //     type: types.CHECK_ALL,
  //   });
  //   expect(state).toMatchSnapshot();
  // });

  // it('should set completed for all elements to false', () => {
  //   state = reducer(state, {
  //     type: types.UNCHECK_ALL,
  //   });
  //   expect(state).toMatchSnapshot();
  // });

  it('should set completed for all elements in "activityLogs" under "timestamp-3" to "false"', () => {
    const emptyLogsState = reducer({ ...state, activityLogs: null }, {
      type: types.ActivityCheckList.SET_DEFAULT_VALUES,
      timestamp: 'timestamp-3',
    });
    expect(emptyLogsState).toMatchSnapshot();
  });
});

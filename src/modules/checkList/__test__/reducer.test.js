import * as types from '../constants'
import reducer from '../reducer'

describe('CheckList Reducer', () => {
  let state;

  it('should return object with empty items and logs', () => {
    state = reducer(state, {
      type: 'TEST',
    });
    expect(state).toMatchSnapshot();
  });

  it('should add 3 objects to items', () => {
    state = reducer(state, {
      type: types.ADD_ITEM,
      id: '1',
      title: 'Test 1',
    });
    state = reducer(state, {
      type: types.ADD_ITEM,
      id: '2',
      title: 'Test 2',
    });
    state = reducer(state, {
      type: types.ADD_ITEM,
      id: '3',
      title: 'Test 3',
    });
    expect(state).toMatchSnapshot();
  });

  it('should save objects "2" and "3" in "logs" under "timestamp-1"', () => {
    state = reducer(state, {
      type: types.TOGGLE_ITEM_CHECKBOX,
      id: '2',
      timestamp: 'timestamp-1',
    });
    state = reducer(state, {
      type: types.TOGGLE_ITEM_CHECKBOX,
      id: '3',
      timestamp: 'timestamp-1',
    });
    expect(state).toMatchSnapshot();
  });

  it('should save object "2" in "logs" under timestamp "timestamp-2"', () => {
    state = reducer(state, {
      type: types.TOGGLE_ITEM_CHECKBOX,
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

  it('should set completed for all elements in "logs" under "timestamp-3" to "false"', () => {
    const emptyLogsState = reducer({ ...state, logs: null }, {
      type: types.SET_DEFAULT_ITEMS,
      timestamp: 'timestamp-3',
    });
    expect(emptyLogsState).toMatchSnapshot();
  });

  it('should remove object "1" from "items"', () => {
    state = reducer(state, {
      type: types.REMOVE_LIST_ITEM,
      id: '1',
    });
    expect(state).toMatchSnapshot();
  });

  it('should set activeCheckList to "active-timestamp"', () => {
    state = reducer(state, {
      type: types.SET_ACTIVE_CHECKLIST,
      timestamp: 'active-timestamp',
    });
    expect(state).toMatchSnapshot();
  });

  // it('should remove all elements and return empty array', () => {
  //   state = reducer(state, {
  //     type: types.REMOVE_ALL,
  //   });
  //   expect(state).toMatchSnapshot();
  // });
});

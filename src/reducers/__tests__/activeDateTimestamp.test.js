import * as types from 'types'
import reducer from '../activeDateTimestamp'

describe('CheckList Reducer', () => {
  let state;

  it('should return 0 as activeDateTimestamp', () => {
    state = reducer(state, {
      type: 'TEST',
    });
    expect(state).toMatchSnapshot();
  });

  it('should set activeDateTimestamp to "active-timestamp"', () => {
    state = reducer(state, {
      type: types.ActivityCheckList.SET_ACTIVE_CHECKLIST,
      timestamp: 'active-timestamp',
    });
    expect(state).toMatchSnapshot();
  });
});

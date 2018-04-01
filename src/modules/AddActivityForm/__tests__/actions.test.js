import mockStore from 'redux-mock-store';
import * as action from '../actions';

jest.mock('store', () => ({
  getState: jest.fn(() => ({
    historicalActivityTypes: { 'historical-test-item': { title: 'Historical' } },
    activityTypes: { 'test-item': { title: 'TestItem' } },
  })),
}));

describe('AddActivityForm module actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  it('should dispatch "ADD_ACTIVITY_TYPE" with title "Test1" and id "1"', async () => {
    await store.dispatch(action.addItem('Test1'));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('should dispatch "ADD_ACTIVITY_ERROR" with EmptyTitleError', async () => {
    await store.dispatch(action.addItem(''));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('should dispatch "ADD_ACTIVITY_ERROR" with NotUniqueTitleError', async () => {
    await store.dispatch(action.addItem('TestItem'));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('should dispatch "ADD_ACTIVITY_ERROR" with NotUniqueTitleError', async () => {
    await store.dispatch(action.addItem('TeStIteM'));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('should dispatch "ADD_ACTIVITY_ERROR" with NotUniqueTitleError', async () => {
    await store.dispatch(action.addItem('Historical'));
    expect(store.getActions()).toMatchSnapshot();
  });
});

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const reduxMockStore = configureMockStore(middlewares);
const mockStore = (state) => {
  const mergedState = Object.assign({}, state);

  return reduxMockStore(mergedState);
};

export default mockStore;
/* eslint-disable import/no-extraneous-dependencies */
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import reducers from 'reducers'
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';

// By default react-native loads several mocks for Jest. Often these are insufficient,
// incomplete and provide little functionality. Add any custom mocks that should
// override the default behaviour here.
//
// Unfortunately react-native-mock caused more issues that it was worth.
// import '../__mocks__/AppState';
// import '../__mocks__/AsyncStorage';
// import '../__mocks__/NativeAppEventEmitter';
// import '../__mocks__/react-native-version-number';
import '../__mocks__/redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });

/**
 * Mocks Date and ensures given timestamp is returned for any new date object.
 * This will also modify moment.js behaviour.
 */
global.mockDate = (time = '2016-12-21T23:36:07.071Z') => {
  const MOCK_DATE = new Date(time);
  const date = Date;
  global.Date = jest.fn(() => MOCK_DATE);
  global.Date.UTC = date.UTC;
  global.Date.parse = date.parse;
  global.Date.now = date.now;
};

/**
 * The enzyme shallow renderer will default to `lifecycleExperimental = true`
 * in the future. This function mimics that behaviour.
 */
global.shallow = (component, opts) => shallow(component, { lifecycleExperimental: true, ...opts });

/**
 * awaitLifecycle executes specified function in a timeout which ensures the
 * lifecycle methods when running `shallow` are finished.
 *
 * Only use this method when your test depends on the React lifecycle methods to
 * finish.
 */
global.awaitLifecycle = (fn, done) => {
  setTimeout(async () => {
    try {
      await fn();
      done();
    } catch (err) {
      done.fail(err);
    }
  });
};

global.initialState = (reducerName = null) => {
  // Create initial state for specified reducer only
  if (reducerName) {
    return {
      ...state,
      [reducerName]: reducers[reducerName](undefined, {}),
    };
  }

  // Create initial state for all reducers
  let state = {};
  Object.keys(reducers).forEach((reducer) => {
    state = {
      ...state,
      [reducer]: reducers[reducer](undefined, {}),
    };
  });
  return state;
};

jest.unmock('ScrollView'); // hack for react-native issue https://github.com/facebook/react-native/issues/12440

// global.mockAxios = new MockAdapter(axios);
// global.mockGet = url => mockAxios.onGet(`http://localhost/v1${url}`);
// global.mockPost = (url, body) => mockAxios.onPost(`http://localhost/v1${url}`, body);
// global.mockPatch = (url, body) => mockAxios.onPatch(`http://localhost/v1${url}`, body);
// global.mockPut = (url, body) => mockAxios.onPut(`http://localhost/v1${url}`, body);
// global.mockDelete = (url, body) => mockAxios.onDelete(`http://localhost/v1${url}`, body);

// Mocking fetch. Do not use jest-mock-fetch which causes issues and is no
// longer being maintained.
// TODO remove these and favour the axios mocks (niels)
global.fetch = jest.fn();

// Helper to mock a success response (only once)
// fetch.mockResponseSuccess = (body) => {
//   fetch.mockImplementationOnce(
//     () => Promise.resolve({
//       json: () => Promise.resolve(JSON.parse(body)),
//       headers: {
//         get: () => 'application/json',
//       },
//     }),
//   );
// };

// Helper to mock a failure response (only once)
// fetch.mockResponseFailure = (error) => {
//   fetch.mockImplementationOnce(
//     () => Promise.reject(error),
//   );
// };

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducer'


let store
let persistor

export function getConfiguredStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-undef
  const middlewares = [thunk];

  const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, reducer)

  return new Promise((resolve, reject) => {
    try {
      store = createStore(
        persistedReducer,
        undefined,
        composeEnhancers(applyMiddleware(...middlewares)),
      );

      persistor = persistStore(store, null, () => resolve({ store, persistor }));
      // persistor.purge();
    } catch (e) {
      reject(e);
    }
  });
}

export function getPersistor() {
  if (persistor) return persistor
  throw new Error('Persistor does not exist')
}

export function getState() {
  if (store) return store.getState()
  throw new Error('Store does not exist')
}

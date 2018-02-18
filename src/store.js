import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducer'

export function getConfiguredStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = [thunk];

  const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, reducer)

  return new Promise((resolve, reject) => {
    try {
      const store = createStore(
        persistedReducer,
        undefined,
        composeEnhancers(applyMiddleware(...middlewares)),
      );

      const persistor = persistStore(store, null, () => resolve({ store, persistor }));
      // persistor.purge();
    } catch (e) {
      reject(e);
    }
  });
}

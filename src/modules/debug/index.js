import { getPersistor } from 'store'

export async function resetStore() {
  const persistor = await getPersistor()
  persistor.purge()
}

export { insertData } from './actions'

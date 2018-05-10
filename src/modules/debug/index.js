import { getPersistor } from 'store'

export async function resetStore() {
  const persistor = await getPersistor()
  persistor.purge()
}

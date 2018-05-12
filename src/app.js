import { getConfiguredStore } from 'store'
import { insertData } from 'modules/debug'
import { Provider } from 'react-redux'
import { startTabBasedApp } from './navigation'
import { registerScreens } from './screens'

async function init() {
  const { store } = await getConfiguredStore()
  registerScreens({ Provider, store })
  startTabBasedApp()
  // store.dispatch(insertData())
}

init()

import { getConfiguredStore } from 'store'
import { Provider } from 'react-redux'
import { startTabBasedApp } from './navigation'
import { registerScreens } from './screens'

async function init() {
  const { store } = await getConfiguredStore()
  registerScreens({ Provider, store })
  startTabBasedApp()
}

init();

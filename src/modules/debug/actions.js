import * as types from 'types'
import data from 'storeMocks/activities.mock'

export const insertData = () => {
  console.log('tamara dispatching', data)
  return {
    type: types.Debug.INSERT_DATA,
    payload: data,
  }
}

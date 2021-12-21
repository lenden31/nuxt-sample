import api from '@api'
import types from '@utils/types'
import { finalPriceCounter } from '@storeModules/menu/config'

export default {
  loadMenuAndContent ({ commit }) {
    return new Promise((resolve, reject) => {
      api.getMenuAndContent().then((response) => {
        commit(types.menu.SET_MENU, response.data)
        resolve()
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

import api from '@api'
import types from '@utils/types'
import deviceDetect from '@utils/device-detect'
import { cloneDeep } from 'lodash'
import { oldSiteRedirectsMap } from './config'

export default {
  async nuxtServerInit ({ commit, dispatch, getters }, { req, route, store, redirect, query, res }) {
    if (req.headers.host.startsWith('www.')) {
      let protocol = 'https' // req.connection.encrypted ? 'https' : 'http'
      redirect(301, protocol + '://' + req.headers.host.replace('www.', '') + req.url)
      return
    }

    // await dispatch('menu/loadMenuAndContent')

    // let deviceData = deviceDetect(req.headers['user-agent'])
    // commit(types.SET_UA_DEVICE, deviceData.tablet ? 'tablet' : (deviceData.smartphone ? 'smartphone' : 'desktop'))
  }
}

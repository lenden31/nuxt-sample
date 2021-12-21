import Vue from 'vue'
import types from '@utils/types'
import actions from '@storeModules/actions'
import getters from '@storeModules/getters'
import { findLast } from 'lodash'

export const strict = false

const state = () => ({
  uaDevice: null
})

const mutations = {
  [types.SET_UA_DEVICE] (state, uaDevice) {
    state.uaDevice = uaDevice
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

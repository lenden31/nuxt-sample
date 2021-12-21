import types from '@utils/types'
import getters from '@storeModules/menu/getters'
import actions from '@storeModules/menu/actions'
import Vue from 'vue'

const state = () => ({
  categories: []
})

const mutations = {
  [types.menu.SET_MENU] (state, data) {
    state.categories = data.categories
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}

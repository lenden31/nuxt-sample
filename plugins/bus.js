import Vue from 'vue'

const eventBus = new Vue()

export default ({ app, store }, inject) => {
  inject('bus', eventBus)
  app.$bus = eventBus
  store.$bus = eventBus
}

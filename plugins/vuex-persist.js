import VuexPersistence from 'vuex-persist'

const init = (store) => {
  new VuexPersistence({
    storage: {
      getItem: key => store.$cookies.get(key),
      setItem: (key, value) => store.$cookies.set(key, value, { maxAge: 60 * 60 * 2, path: '/' }),
      removeItem: key => store.$cookies.remove(key)
    },
    modules: ['cart', 'storage']
  }).plugin(store)
}

export default ({ store }) => {
  if (process.browser) {
    window.onNuxtReady(() => {
      init(store)
    })
  } else {
    init(store)
  }
}

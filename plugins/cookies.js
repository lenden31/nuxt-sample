export default ({ app, store }, inject) => {
  inject('cookies', app.$cookiz)
}

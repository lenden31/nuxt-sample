// import { beforeEach } from '@router/beforeEach'

export default function({ route, from, store, redirect, req }) {
  // beforeEach(route, from, redirect, store)
  store.$bus.$emit('side-menu.close')

  if (route.name === 'success' && !route.query.orderId) {
    redirect('/')
  }

  if (['payment-success', 'payment-failed'].includes(route.name) && !route.query.InvId) {
    redirect('/')
  }
}

import { initSendRequest } from '@utils/sendRequest'
import https from 'https'

export default function ({ $axios, redirect, app, store, route, req }) {
  $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })
  initSendRequest($axios)
}

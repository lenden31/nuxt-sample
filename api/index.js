import requester from '@utils/sendRequest'

let API_ROOT = process.env.API_ROOT
let API_PATH = API_ROOT + '/front-api'

export default {
  getMenuAndContent () {
    return requester().get(`${API_PATH}/menu`)
  },
  createOrder (data) {
    return requester().$post(`${API_PATH}/order`, data)
  }
}

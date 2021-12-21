let requester
export function initSendRequest (rq) {
  requester = rq
}

export default () => {
  return requester
}

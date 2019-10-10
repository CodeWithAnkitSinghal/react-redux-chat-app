import { SOCKET_SERVER_HOST, SOCKET_SERVER_PORT } from './configuration'

import {
  USER_CONNECTED,
  USERS_LIST_UPDATED,

  NEW_MESSAGE_RECEIVED,
  MESSAGES_LIST_UPDATED,
} from './constants/socket-server-action-types.const'

import initializeApp from './actions/initialize-app.action'
import updateUsersList from './actions/update-users-list.action'
import updateMessagesList from './actions/update-messages-list.action'

import store from './store'


const socket = new WebSocket(`ws://${SOCKET_SERVER_HOST}:${SOCKET_SERVER_PORT}`)


socket.onopen = () => {
  console.log('Socket ready...')
}


socket.onmessage = ({ data }) => {
  const action = JSON.parse(data)

  switch (action.type) {
    case USER_CONNECTED:
      store.dispatch(initializeApp(action.payload))
      break

    case USERS_LIST_UPDATED:
      store.dispatch(updateUsersList(action.payload))
      break

    case NEW_MESSAGE_RECEIVED:
      store.dispatch(updateMessagesList(action.payload))
      break

    case MESSAGES_LIST_UPDATED:
      store.dispatch(updateMessagesList(action.payload))
      break

    default:
      console.log('Unknown action:', action)
  }
}


socket.onerror = event => {
  alert('Socket connection failed!\nPlease check that server is running on correct port.')
}


export default socket

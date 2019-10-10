import React from 'react'
import PropTypes from 'prop-types'

import UsersListContainer from '../containers/users-list.container'
import MessagesListContainer from '../containers/messages-list.container'
import NewMessageInputContainer from '../containers/new-message-input.container'

import LoadingScreen from './loading-screen.component'

const MainLayout = ({ applicationReady }) => (
  applicationReady
    ? (
      <div className="wrapper">
        <aside className="sidebar">
          <UsersListContainer />
        </aside>
        <section className="main">
          <MessagesListContainer />
          <NewMessageInputContainer />
        </section>
      </div>
    )
    : <LoadingScreen />
)

MainLayout.propTypes = {
  applicationReady: PropTypes.bool.isRequired,
}
export default MainLayout


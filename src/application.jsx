import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import ApplicationContainer from './containers/application.container'


const Application = ({ store }) => (
  <Provider store={store}>
    <ApplicationContainer />
  </Provider>
)


Application.propTypes = {
  store: PropTypes.object.isRequired,
}


export default Application

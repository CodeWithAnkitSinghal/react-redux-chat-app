import { createElement } from 'react'
import { render } from 'react-dom'

import store from './store'
import Application from './application'

import './styles/main.style'

render(
  createElement(Application, { store }),
  document.getElementById('root'),
)

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './configureStore'
import AppView from './components/AppView'
import './index.css'

render(
  <Provider store={store}>
     <AppView />
  </Provider>,
  document.getElementById('root')
)

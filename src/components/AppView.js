import React from 'react'
import './App.css'
import { Button } from 'react-bootstrap'
import IntroContainer from '../containers/IntroContainer'

const AppView = ({ x }) => {
  return (
    <div>
      <IntroContainer />
      <Button bsStyle="primary">{x}</Button>
    </div>
  )
}

export default AppView

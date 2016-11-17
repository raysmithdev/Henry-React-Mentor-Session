import React from 'react'
import './App.css'
import { Button } from 'react-bootstrap'

const AppView = ({ x }) => {
  return (
    <Button bsStyle="primary">{x}</Button>
  )
}

export default AppView

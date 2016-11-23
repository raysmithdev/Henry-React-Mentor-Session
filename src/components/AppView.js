import React from 'react'
import './App.css'
import IntroContainer from '../containers/IntroContainer'
import FormContainer from '../containers/FormContainer'

const AppView = ({ x }) => {
  return (
    <div>
      <IntroContainer />
      <FormContainer />
    </div>
  )
}

export default AppView

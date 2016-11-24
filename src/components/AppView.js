import React from 'react'
import './App.css'
import FormContainer from '../containers/FormContainer'
import BeerListContainer from '../containers/BeerListContainer'

const AppView = () => {
  return (
    <div>
      <FormContainer />
      <BeerListContainer />
    </div>
  )
}

export default AppView

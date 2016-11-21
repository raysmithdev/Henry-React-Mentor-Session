import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const IntroView = ({ name, about }) => (
  <Jumbotron>
   <h1>Hello, { name }!</h1>
   <p>{ about }</p>
 </Jumbotron>
);

export default IntroView

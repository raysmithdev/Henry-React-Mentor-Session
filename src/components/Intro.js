import React, { PropTypes } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

const Intro = (props) => {
  return (
    <Jumbotron>
      <h1>{props.title}, {props.name}!</h1>
      <p>Welcome to Henry's React Mentor Session playground.</p>
      <p><Button bsStyle="primary">Learn more</Button></p>
    </Jumbotron>
  )
}



export default Intro

import React from 'react'
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'

const BeerListView = ({ beers }) => {
  return (
    <Grid>
      {beers.map((beer, index) => (
        <Row key={index}>
          <Col md={12}>
            <Thumbnail src={beer.labels.large} alt="242x200">
              <h3>{beer.name}</h3>
              <p>{beer.description}</p>
            </Thumbnail>
          </Col>
        </Row>
      ))}
  </Grid>
  )
}

export default BeerListView

import React from 'react'
import { Grid, Row, Col, Form, FormGroup, FormControl, Button } from 'react-bootstrap'

const FormView = ({ fetchBeers }) => {
  return (
    <Grid>
      <Row>
        <Col md={12}>
          <Form
            onSubmit={ (event) => {
              event.preventDefault()
              let beerName = event.target.input.value
              fetchBeers(beerName)
              event.target.input.value = ''
            }}
            inline
          >
            <FormGroup controlId="formInlineName">
              <FormControl name="input" type="text" placeholder="Search for a beer" />
            </FormGroup>
            {' '}
            <Button type="submit">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Grid>
  )
}

export default FormView

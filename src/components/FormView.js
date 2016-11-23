import React from 'react'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'

const FormView = ({ changeName }) => {
  return (
    <Form
      onSubmit={ (event) => {
        event.preventDefault()
        let userInput = event.target.input.value
        changeName(userInput)
        event.target.input.value = ''
      }}
      inline
    >
      <FormGroup controlId="formInlineName">
        <FormControl name="input" type="text" placeholder="Type a new name" />
      </FormGroup>
      {' '}
      <Button bsStyle="info" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default FormView

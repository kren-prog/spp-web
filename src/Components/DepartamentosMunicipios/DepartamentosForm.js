import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';

function DepartamentosForm() {

  return (
    <Form>

    <Row>

        <Form.Group as={Col} controlId="codigo">
            <Form.Label className='fw-bold'>Codigo</Form.Label>
            <Form.Control type="text" className='' />
        </Form.Group>

    </Row>

    <Row>

        <Form.Group as={Col} controlId="nombre">
            <Form.Label className='fw-bold'>Nombre</Form.Label>
            <Form.Control type="text" className='' />
        </Form.Group>

    </Row>
    <Button variant='success' className='m-2'>
        Guardar
    </Button>

</Form>
  )
}

export default DepartamentosForm
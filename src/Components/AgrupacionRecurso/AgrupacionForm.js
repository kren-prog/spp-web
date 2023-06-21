import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { BookmarkStarFill } from 'react-bootstrap-icons';

function AgrupacionForm() {
  return (
    <Form>

      <Row>
        <Form.Group as={Col} controlId="codigo">
          <Form.Label className='fw-bold'>Tipo recurso</Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>

      </Row>

      <Row>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Agrupacion</Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Descripcion</Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Rpm</Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Mts</Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Carga minima</Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Produccion </Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Eficiencia</Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Tiemmpo estandar</Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
      </Row>
      <div className='text-center'>
        <Button variant="success" className='btn btn-sm m-2 fw-bold'>
          Guardar <BookmarkStarFill color="white" size={18} title="Save" />
        </Button>
      </div>
    </Form>

  )
}

export default AgrupacionForm
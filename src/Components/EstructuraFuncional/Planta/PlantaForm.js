import React from 'react'
import {Form, Row, Col, Button } from 'react-bootstrap';
import { BookmarkStarFill } from 'react-bootstrap-icons';

function PlantaForm() {
  return (
    <Form>

    <Row>
      <Form.Group as={Col} controlId="codigo">
        <Form.Label className='fw-bold'>Codigo</Form.Label>
        <Form.Control type="text" className='w-25' />
      </Form.Group>
      <Form.Group as={Col} controlId="codigo">
        <Form.Label className='fw-bold'>Fabrica</Form.Label>
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
        <Form.Label className='fw-bold'>Departamento</Form.Label>
        <Form.Control type="text" className='' />
      </Form.Group>
      <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Municipio</Form.Label>
        <Form.Control type="text" className='' />
      </Form.Group>
    </Row>

    <Row>
    <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Telefono </Form.Label>
        <Form.Control type="text" className='' />
      </Form.Group>
      <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Direccion</Form.Label>
        <Form.Control type="text" className='' />
      </Form.Group>
    </Row>

    <Row>
      <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Estado </Form.Label>
        <Form.Control type="text" className='' />
      </Form.Group>
      <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Secuencia </Form.Label>
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

export default PlantaForm
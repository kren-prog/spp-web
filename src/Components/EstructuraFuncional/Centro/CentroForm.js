import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { BookmarkStarFill } from 'react-bootstrap-icons';

function CentroForm() {
  return (
    <Form>

      <Row>
        <Form.Group as={Col} controlId="codigo">
          <Form.Label className='fw-bold'>Codigo</Form.Label>
          <Form.Control type="text" className='w-25' />
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
          <Form.Label className='fw-bold'>Razon social</Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>NIT</Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Representante legal</Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Direccion (1) </Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Direccion (2)</Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Direccion (3)</Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Telefono (1) </Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Telefono (2) </Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Fax</Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
      </Row>


      <Row>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Pais </Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Departamento </Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Municipio </Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Url </Form.Label>
          <Form.Control type="text" className='' />
        </Form.Group>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Email </Form.Label>
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

export default CentroForm
import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { BookmarkStarFill } from 'react-bootstrap-icons';

function ProcesosForm() {
  return (
    <Form>

    <Row>
      <Form.Group as={Col} controlId="codigo">
        <Form.Label className='fw-bold'>Codigo</Form.Label>
        <Form.Control type="text" className='' />
      </Form.Group>
      <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Tipo negocio</Form.Label>
        <Form.Control type="text" className='' />
      </Form.Group><Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Tipo ficha</Form.Label>
        <Form.Control type="text" className='' />
      </Form.Group>
    </Row>

    <Row>
      <Form.Group as={Col}>
        <Form.Check // prettier-ignore
          type="checkbox"
          id=""
          label="Interno" checked
        />
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Check // prettier-ignore
          type="checkbox"
          id=""
          label="Mono Operacion"
        />
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Check // prettier-ignore
          type="checkbox"
          id=""
          label="Usa maquinas"
        />
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Check // prettier-ignore
          type="checkbox"
          id=""
          label="Controlado por Gantt"
        />
      </Form.Group>
    </Row>

    <Row>
      <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Cod unidad</Form.Label>
        <Form.Control type="text" className='' />
      </Form.Group>
      <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Unidad alterna</Form.Label>
        <Form.Control type="text" className='' />
      </Form.Group>
      <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Tipo material producido</Form.Label>
        <Form.Control type="text" className='' />
      </Form.Group>
    </Row>

    <Row>
      <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Descripcion</Form.Label>
        <Form.Control type="text" className='' />
      </Form.Group>
      <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Descripcion corta</Form.Label>
        <Form.Control type="text" className='' />
      </Form.Group>
    </Row>

    <Row>
      <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Porcentaje por defecto</Form.Label>
        <Form.Control type="number" className='' />
      </Form.Group>
      <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Porc Del Por 2as Pasadas</Form.Label>
        <Form.Control type="number" className='' />
      </Form.Group>
      <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Origen estandar</Form.Label>
        <Form.Control type="number" className='' />
      </Form.Group>
    </Row>

    <Row>
      <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Caracteristicas que genera</Form.Label>
        <Form.Control type="number" className='' />
      </Form.Group>
      <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Subproducto por defecto</Form.Label>
        <Form.Control type="number" className='' />
      </Form.Group>
      <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Tipo eficiencia</Form.Label>
        <Form.Control type="number" className='' />
      </Form.Group>
    </Row>

    <Row>

      <Form.Check // prettier-ignore
        type="checkbox"
        id=""
        label="U pedido a U Proceso"
      />
      <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Conversion</Form.Label>
        <Form.Control type="number" className='' />
      </Form.Group>
      <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Tipo LT</Form.Label>
        <Form.Control type="number" className='' />
      </Form.Group>
      <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>Lead Time</Form.Label>
        <Form.Control type="number" className='' />
      </Form.Group>
      <Form.Group as={Col} controlId="descripcion">
        <Form.Label className='fw-bold'>T entre Ref</Form.Label>
        <Form.Control type="number" className='' />
      </Form.Group>
    </Row>

    <div className='text-center'>
      <Button variant="success" className='btn btn-sm m-2 fw-bold'>
        Guardar <BookmarkStarFill color="white" size={18} title="Save" />
      </Button>
    </div>

  </Form >

  )
}

export default ProcesosForm
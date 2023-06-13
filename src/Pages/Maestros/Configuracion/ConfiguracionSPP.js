import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';

function ConfiguracionSPP() {
  return (
    <Form>

      <Row>
        <Form.Group as={Col} controlId="descripcion">
          <Form.Label className='fw-bold'>Configuración basica</Form.Label>
          <Form.Check // prettier-ignore
            type="checkbox"
            id=""
            label="Manejar decimales" checked
          />
          <Form.Check // prettier-ignore
            type="checkbox"
            id=""
            label="Desplazar barras"
          />
          <Form.Check // prettier-ignore
            type="checkbox"
            id=""
            label="Arrastra automatico"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="tipop">
          <Form.Label className='fw-bold'>Tipo Programación</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1" selected>PEDSKU</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row>
        
        <Form.Group as={Col} controlId="etiquetas">
          <Form.Label className='fw-bold'>Etiquetas</Form.Label>
          <Form.Control type="text" className='' placeholder='Etiqueta recurso' />
        </Form.Group>

      </Row>

      <Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Row>

      <Button variant='primary' className=''>
        Aceptar
      </Button>


    </Form>
  )
}

export default ConfiguracionSPP
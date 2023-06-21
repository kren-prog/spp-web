import React from 'react'
import { BookmarkStarFill } from 'react-bootstrap-icons';
import { Form, Row, Col, Button } from 'react-bootstrap';

function ClientesForm() {

    return (
        <Form>

            <Row>
                <Form.Group as={Col} controlId="codigo">
                    <Form.Label className='fw-bold'>Cod cliente</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Estado</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Tipo cliente</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Nombre cliente</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Email</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Razon social</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Contacto</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Rep legal</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Nit</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
            </Row>

            <Row>
                <h5>Agente</h5>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Retenedor</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Regimen</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Direccion</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Pais</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
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
                    <Form.Label className='fw-bold'>Telefono 1</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Telefono 2</Form.Label>
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

export default ClientesForm
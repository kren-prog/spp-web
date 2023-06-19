import React from 'react'
import { BookmarkStarFill } from 'react-bootstrap-icons';
import { Form, Row, Col, Button } from 'react-bootstrap';

function ConsecutivoForm() {
    return (
        <Form>
            <Row>
                <Form.Group as={Col} controlId="codigo">
                    <Form.Label>Identificador</Form.Label>
                    <Form.Control type="number" className='w-25' />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="tipoCadena">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="an1">
                    <Form.Label>Prefijo</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
                <Form.Group as={Col} controlId="an2">
                    <Form.Label>Sufijo</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
                <Form.Group as={Col} controlId="an3">
                    <Form.Label>Numero Inicio</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
                <Form.Group as={Col} controlId="an4">
                    <Form.Label>Incremento</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="an1">
                    <Form.Label>Numero aviso</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
                <Form.Group as={Col} controlId="an2">
                    <Form.Label>Numero final</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
                <Form.Group as={Col} controlId="an3">
                    <Form.Label>Numero Actual</Form.Label>
                    <Form.Control type="number" />
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

export default ConsecutivoForm
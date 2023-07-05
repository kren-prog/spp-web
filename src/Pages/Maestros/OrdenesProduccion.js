import React from 'react'
import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import { BookmarkStarFill } from 'react-bootstrap-icons';

function OrdenesProduccion() {
    return (
        <Form>

            <Row>
                <Col xs={12} md={8} lg={6} xl={5} xxl={5} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="nombreCliente" className='fw-bold'>Proceso</InputGroup.Text>
                        <Form.Control aria-label="Nombre cliente" aria-describedby="codCliente" type='text' />
                    </InputGroup>
                </Col>
                <Col xs={12} md={8} lg={6} xl={5} xxl={5} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="email" className='fw-bold'>Tipo orden</InputGroup.Text>
                        <Form.Control aria-label="Email" aria-describedby="email" type='email' />
                    </InputGroup>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={8} lg={6} xl={5} xxl={5} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="nombreCliente" className='fw-bold'>Ide Orden</InputGroup.Text>
                        <Form.Control aria-label="Nombre cliente" aria-describedby="codCliente" type='text' />
                    </InputGroup>
                </Col>
                <Col xs={12} md={8} lg={6} xl={5} xxl={5} className='mb-3'>
                    <InputGroup className="" size="sm">
                        <InputGroup.Text id="email" className='fw-bold'>Estado</InputGroup.Text>
                        <Form.Control aria-label="Email" aria-describedby="email" type='email' />
                    </InputGroup>
                </Col>
            </Row>
            
            <Row>
                <Col xs={12} md={8} lg={10} xl={10} xxl={10} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="repLegal" className='fw-bold'>Descripcion</InputGroup.Text>
                        <Form.Control aria-label="Rep legal" aria-describedby="repLegal" type='text' />
                    </InputGroup>
                </Col>
            </Row>

            <Row >
                <Col xs={12} md={6} lg={4} xl={4} xxl={3} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="codCliente" className='fw-bold'>Fecha de entrega</InputGroup.Text>
                        <Form.Control aria-label="Cod cliente" aria-describedby="codCliente" type='date'/>
                    </InputGroup>
                </Col>

                <Col xs={12} md={6} lg={4} xl={4} xxl={3} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="estado" className='fw-bold'>Fecha Inicio produccion</InputGroup.Text>
                        <Form.Control aria-label="Estado" aria-describedby="estado" type='date'/>
                    </InputGroup>
                </Col> 

                <Col xs={12} md={6} lg={4} xl={4} xxl={3} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="tipoCliente" className='fw-bold'>Fecha creacion</InputGroup.Text>
                        <Form.Control aria-label="Tipo cliente" aria-describedby="tipoCliente" type='date'/>
                    </InputGroup>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={8} lg={6} xl={5} xxl={3} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="nombreCliente" className='fw-bold'>Fecha programada Inicio</InputGroup.Text>
                        <Form.Control aria-label="Nombre cliente" aria-describedby="codCliente" type='date' />
                    </InputGroup>
                </Col>
                <Col xs={12} md={8} lg={6} xl={5} xxl={5} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="email" className='fw-bold'>Material a programar</InputGroup.Text>
                        <Form.Control aria-label="Email" aria-describedby="email" type='text' />
                    </InputGroup>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={8} lg={6} xl={5} xxl={5} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="nombreCliente" className='fw-bold'>Tipo Material</InputGroup.Text>
                        <Form.Control aria-label="Nombre cliente" aria-describedby="codCliente" type='text' />
                    </InputGroup>
                </Col>
                <Col xs={12} md={8} lg={6} xl={5} xxl={5} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="email" className='fw-bold'>Producto</InputGroup.Text>
                        <Form.Control aria-label="Email" aria-describedby="email" type='email' />
                    </InputGroup>
                </Col>
            </Row>

            <Row >
                <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="codCliente" className='fw-bold'>Referencia</InputGroup.Text>
                        <Form.Control aria-label="Cod cliente" aria-describedby="codCliente" type='number'/>
                    </InputGroup>
                </Col>

                <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="estado" className='fw-bold'>Codigo color</InputGroup.Text>
                        <Form.Control aria-label="Estado" aria-describedby="estado" type='number'/>
                    </InputGroup>
                </Col>

                <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="tipoCliente" className='fw-bold'>Codigo pinta</InputGroup.Text>
                        <Form.Control aria-label="Tipo cliente" aria-describedby="tipoCliente" type='number'/>
                    </InputGroup>
                </Col>
            </Row>

            <Row >
                <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="codCliente" className='fw-bold'>Codigo talla</InputGroup.Text>
                        <Form.Control aria-label="Cod cliente" aria-describedby="codCliente" type='number'/>
                    </InputGroup>
                </Col>

                <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="estado" className='fw-bold'>Codigo estampado</InputGroup.Text>
                        <Form.Control aria-label="Estado" aria-describedby="estado" type='number'/>
                    </InputGroup>
                </Col>

                <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="tipoCliente" className='fw-bold'>Calidad</InputGroup.Text>
                        <Form.Control aria-label="Tipo cliente" aria-describedby="tipoCliente" type='number'/>
                    </InputGroup>
                </Col>
            </Row>

            <Row >
                <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="codCliente" className='fw-bold'>Cantidad pedida</InputGroup.Text>
                        <Form.Control aria-label="Cod cliente" aria-describedby="codCliente" type='number'/>
                    </InputGroup>
                </Col>

                <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="estado" className='fw-bold'>Cantidad programada</InputGroup.Text>
                        <Form.Control aria-label="Estado" aria-describedby="estado" type='number'/>
                    </InputGroup>
                </Col>

                <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="tipoCliente" className='fw-bold'>Cantidad cumplida</InputGroup.Text>
                        <Form.Control aria-label="Tipo cliente" aria-describedby="tipoCliente" type='number'/>
                    </InputGroup>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={8} lg={10} xl={10} xxl={10} className='mb-3'>
                    <InputGroup className=""  size="sm">
                        <InputGroup.Text id="repLegal" className='fw-bold'>Observacion</InputGroup.Text>
                        <Form.Control as="textarea" rows={3} aria-label="Rep legal" aria-describedby="repLegal" type='text' />
                    </InputGroup>
                </Col>
            </Row>
            <div className='text-center'>
                <Button variant="success" className='btn btn-sm m-2 fw-bold'>
                    Guardar <BookmarkStarFill color="white" size={18} title="Save" />
                </Button>
            </div>
        </Form>
    )
}

export default OrdenesProduccion
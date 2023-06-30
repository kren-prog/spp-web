import React from 'react'
import { BookmarkStarFill } from 'react-bootstrap-icons';
import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap';

function ClientesForm() {
   // Large ≥992px	X-Large ≥1200px	XX-Large ≥1400px
    return (
        <Form>

            <Row >
                <Col xs={12} md={6} lg={4} xl={4} xxl={4}>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="codCliente" className='fw-bold'>Cod cliente</InputGroup.Text>
                        <Form.Control aria-label="Cod cliente" aria-describedby="codCliente" />
                    </InputGroup>
                </Col>

                <Col xs={12} md={6} lg={4} xl={4} xxl={4}>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="estado" className='fw-bold'>Estado</InputGroup.Text>
                        <Form.Control aria-label="Estado" aria-describedby="estado" />
                    </InputGroup>
                </Col>

                <Col xs={12} md={6} lg={4} xl={4} xxl={4}>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="tipoCliente" className='fw-bold'>Tipo cliente</InputGroup.Text>
                        <Form.Control aria-label="Tipo cliente" aria-describedby="tipoCliente" />
                    </InputGroup>
                </Col>

                {/* 
                <Form.Group as={Col} controlId="codigo" >
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
                </Form.Group> */}
            </Row>

            <Row >
                <Col xs={12} md={8} lg={6} xl={5} xxl={5} >
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="nombreCliente" className='fw-bold'>Nombre cliente</InputGroup.Text>
                        <Form.Control aria-label="Nombre cliente" aria-describedby="codCliente" type='text' />
                    </InputGroup>
                </Col>
                <Col xs={12} md={8} lg={6} xl={5} xxl={5} >
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="email" className='fw-bold'>Email</InputGroup.Text>
                        <Form.Control aria-label="Email" aria-describedby="email" type='email' />
                    </InputGroup>
                </Col>
                {/* 
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Nombre cliente</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Email</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group> */}
            </Row>

            <Row >
                <Col xs={12} md={8} lg={6} xl={5} xxl={5} >
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="razonSocial" className='fw-bold'>Razon social</InputGroup.Text>
                        <Form.Control aria-label="Razon social" aria-describedby="razonSocial" type='text' />
                    </InputGroup>
                </Col>
                <Col xs={12} md={8} lg={6} xl={5} xxl={5} >
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="contacto" className='fw-bold'>Contacto</InputGroup.Text>
                        <Form.Control aria-label="Contacto" aria-describedby="contacto" type='text' />
                    </InputGroup>
                </Col>
                {/* <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Razon social</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Contacto</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group> */}
            </Row>

            <Row>
                <Col xs={12} md={8} lg={10} xl={10} xxl={10} >
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="repLegal" className='fw-bold'>Rep legal</InputGroup.Text>
                        <Form.Control aria-label="Rep legal" aria-describedby="repLegal" type='text' />
                    </InputGroup>
                </Col>

                {/* <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Rep legal</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group> */}
            </Row>

            <Row>
                <Col xs={12} md={8} lg={8} xl={6} xxl={6} >
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="nit" className='fw-bold'>Nit</InputGroup.Text>
                        <Form.Control aria-label="Nit" aria-describedby="nit" type='text' />
                    </InputGroup>
                </Col>
                {/* <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Nit</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group> */}
            </Row>

            <Row >
                <label className='mb-3'>Agente</label>
                <Col xs={12} md={8} lg={6} xl={6} xxl={6}>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="retenedor" className='fw-bold'>Retenedor</InputGroup.Text>
                        <Form.Control aria-label="Retenedor" aria-describedby="retenedor" type='text' />
                    </InputGroup>
                </Col>
                <Col xs={12} md={8} lg={6} xl={6} xxl={6}>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="regimen" className='fw-bold'>Regimen</InputGroup.Text>
                        <Form.Control aria-label="Regimen" aria-describedby="regimen" type='text' />
                    </InputGroup>
                </Col>
                {/* <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Retenedor</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Regimen</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group> */}
            </Row>

            <Row>
                <Col xs={12} md={10} lg={10} xl={8} xxl={8}>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="direccion" className='fw-bold'>Direccion</InputGroup.Text>
                        <Form.Control aria-label="Direccion" aria-describedby="direccion" type='text' />
                    </InputGroup>
                </Col>
                {/* <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Direccion</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group> */}
            </Row>

            <Row >
                <Col xs={12} md={6} lg={4} xl={4} xxl={4}>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="pais" className='fw-bold'>Pais</InputGroup.Text>
                        <Form.Control aria-label="Pais" aria-describedby="pais" type='text' />
                    </InputGroup>
                </Col>
                <Col xs={12} md={6} lg={4} xl={4} xxl={4}>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="departamento" className='fw-bold'>Departamento</InputGroup.Text>
                        <Form.Control aria-label="Departamento" aria-describedby="departamento" type='text' />
                    </InputGroup>
                </Col>
                <Col xs={12} md={6} lg={4} xl={4} xxl={4}>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="municipio" className='fw-bold'>Municipio</InputGroup.Text>
                        <Form.Control aria-label="Municipio" aria-describedby="municipio" type='text' />
                    </InputGroup>
                </Col>
                {/* <Form.Group as={Col} controlId="descripcion">
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
                </Form.Group> */}
            </Row>

            <Row >
                <Col xs={12} md={8} lg={6} xl={5} xxl={5}>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="telefono1" className='fw-bold'>Telefono 1</InputGroup.Text>
                        <Form.Control aria-label="Telefono 1" aria-describedby="telefono1" type='text' />
                    </InputGroup>
                </Col>
                <Col xs={12} md={8} lg={6} xl={5} xxl={5}>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="telefono 2" className='fw-bold'>Telefono 2</InputGroup.Text>
                        <Form.Control aria-label="Telefono 2" aria-describedby="telefono 2" type='text' />
                    </InputGroup>
                </Col>
                {/* <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Telefono 1</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Telefono 2</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group> */}
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
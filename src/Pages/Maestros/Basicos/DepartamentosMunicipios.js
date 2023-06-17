import React from 'react'
import { Table, Form, Row, Col, Button } from 'react-bootstrap';

function DepartamentosMunicipios() {
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = Math.ceil(50 / itemsPerPage); // data.length

    const data = [
        { code: 1, nombre: 'Amazonas' },
        { code: 2, nombre: 'Antioquia' },
        { code: 3, nombre: 'Arauca' },
        { code: 4, nombre: 'Atlántico' },
        { code: 5, nombre: 'Bolívar' },
        { code: 6, nombre: 'Boyacá' },
        { code: 7, nombre: 'Caldas' },
        { code: 8, nombre: 'Caquetá' },
        { code: 9, nombre: 'Casanare' },
        { code: 10, nombre: 'Cauca' },
        { code: 11, nombre: 'Cesar' },
        { code: 12, nombre: 'Chocó' },
        { code: 13, nombre: 'Córdoba' },
        { code: 14, nombre: 'Cundinamarca' },
        { code: 15, nombre: 'Güainia' },
        { code: 16, nombre: 'Guaviare' },
        { code: 17, nombre: 'Huila' },
        { code: 18, nombre: 'La Guajira' },
        { code: 19, nombre: 'Magdalena' },
        { code: 20, nombre: 'Meta' }
    ];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    return (
        <>
            <Row>

                <Col>

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

                    <Table striped bordered hover responsive size="sm">
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Departamento</th>
                                <th className="fixed-column">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            {currentData.map((item) => (
                                <tr key={item.code}>
                                    <td>{item.code}</td>
                                    <td>{item.nombre}</td>
                                    <td className="fixed-column">
                                        <div className="d-flex p-2">
                                            {/* <a href='/'><Pencil color="royalblue" size={24} title="Editar" /></a> */}
                                            {/* <SweetAlert onAlertResponse={handleAlertResponse}
                                                title="Esta seguro?"
                                                text="Se eliminara el item."
                                                icon="warning"
                                                typebtn="delete"
                                            />
                                            <p> {alertResponse}</p> */}
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>

                </Col>

                <Col>

                    <Form>

                        <Row>

                            <Form.Group as={Col} controlId="descripcion">
                                <Form.Label className='fw-bold'>Departamento</Form.Label>
                                <Form.Control type="text" className='' />
                            </Form.Group>

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

                    <Table striped bordered hover responsive size="sm">
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Municipio</th>
                                <th className="fixed-column">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            {currentData.map((item) => (
                                <tr key={item.code}>
                                    <td>{item.code}</td>
                                    <td>{item.nombre}</td>
                                    <td className="fixed-column">
                                        <div className="d-flex p-2">
                                            {/* <a href='/'><Pencil color="royalblue" size={24} title="Editar" /></a> */}
                                            {/* <SweetAlert onAlertResponse={handleAlertResponse}
                                                title="Esta seguro?"
                                                text="Se eliminara el item."
                                                icon="warning"
                                                typebtn="delete"
                                            />
                                            <p> {alertResponse}</p> */}
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>

                </Col>

            </Row>
        </>
    )
}

export default DepartamentosMunicipios
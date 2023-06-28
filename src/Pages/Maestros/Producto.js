import React from 'react'
import { Table } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import SweetAlert from '../../Components/SweetAlert';
import { useForm } from '../../App/useForm';
import BasicModal from '../../Components/BasicModal';

function Producto() {
    const { show, handleClose, handleShow } = useForm();
    const [alertResponse, setAlertResponse] = React.useState(null);
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(50 / itemsPerPage); // data.length

    const handleAlertResponse = (response) => {
        setAlertResponse(response);
    };

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }


    const data = [
        { code: 'CON', description: 'Confeccion', observacion: 'Confeccion' },
        { code: 'EMP', description: 'Empaque', observacion: 'Empaque' },
    ];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    return (
        <>
            <Form>
                <Row>
                    <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm" className='fw-bold'>Tipo material</InputGroup.Text>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm" className='fw-bold'>Producto</InputGroup.Text>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6} md={4} lg={4} xl={4} xxl={2} className='mb-3'>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm" className='fw-bold'>Referencia</InputGroup.Text>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                    </Col>
                    <Col xs={6} md={4} lg={4} xl={4} xxl={1} className='mb-3'>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm" className='fw-bold'>Color</InputGroup.Text>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                    </Col>
                    <Col xs={6} md={4} lg={4} xl={4} xxl={1} className='mb-3'>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm" className='fw-bold'>Talla</InputGroup.Text>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                    </Col>
                    <Col xs={6} md={4} lg={4} xl={4} xxl={1} className='mb-3'>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm" className='fw-bold'>Cal</InputGroup.Text>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                    </Col>
                    <Col xs={6} md={4} lg={4} xl={4} xxl={1} className='mb-3'>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm" className='fw-bold'>Pinta</InputGroup.Text>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                    </Col>
                    <Col xs={6} md={4} lg={4} xl={4} xxl={2} className='mb-3'>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm" className='fw-bold'>Estampado</InputGroup.Text>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                    </Col>
                    <Col xs={6} md={4} lg={4} xl={4} xxl={1} className='mb-3'>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm" className='fw-bold'>Pinta E</InputGroup.Text>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                    </Col>
                    <Col xs={6} md={4} lg={4} xl={4} xxl={2} className='mb-3'>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm" className='fw-bold'>Bordado</InputGroup.Text>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                    </Col>
                    <Col xs={6} md={4} lg={4} xl={4} xxl={1} className='mb-3'>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm" className='fw-bold'>Pinta B</InputGroup.Text>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={6} lg={4} xl={4} xxl={6} className='mb-3'>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm" className='fw-bold'>Descripcion</InputGroup.Text>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={4} xxl={6} className='mb-3'>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm" className='fw-bold'>D corta/Alias</InputGroup.Text>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                    </Col>
                </Row>

            </Form>

            <Table striped bordered hover responsive size="sm">
                <thead>
                    <tr>
                        <th>Tipo material</th>
                        <th>Cod producto</th>
                        <th>Referencia</th>
                        <th>Descripcion</th>
                        <th>Descripcion corta</th>
                        <th>Cod color</th>
                        <th>Cod talla</th>
                        <th>Calidad</th>
                        <th>Cod estampado</th>
                        <th>Pinta estampado</th>
                        <th>Cod bordado</th>
                        <th>Pinta bordado</th>
                        <th className="fixed-column">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {currentData.map((item) => (
                        <tr key={item.code}>
                            <td>{item.code}</td>
                            <td>{item.description}</td>
                            <td>{item.observacion}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="fixed-column">
                                <div className="d-flex p-2">
                                    <span onClick={() => handleShow} style={{ cursor: 'pointer' }}>
                                        <Pencil color="royalblue" size={24} title="Editar" />

                                    </span>

                                    <SweetAlert onAlertResponse={handleAlertResponse}
                                        title="Esta seguro?"
                                        text="Se eliminara el item."
                                        icon="warning"
                                        typebtn="delete"
                                    />
                                    <p> {alertResponse}</p>
                                </div>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </>
    )
}

export default Producto
import React from 'react'
import { Table } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import SweetAlert from '../../Components/SweetAlert';
import { useForm } from '../../App/useForm';
import BasicModal from '../../Components/BasicModal';

function Pedidos() {
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
                        <InputGroup className="">
                            <InputGroup.Text id="codCliente" className='fw-bold'>Cod pedido</InputGroup.Text>
                            <Form.Control aria-label="Cod cliente" aria-describedby="codCliente" type='number' />
                        </InputGroup>
                    </Col>

                    <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                        <InputGroup className="">
                            <InputGroup.Text id="estado" className='fw-bold'>Orden compra</InputGroup.Text>
                            <Form.Control aria-label="Estado" aria-describedby="estado" type='text' />
                        </InputGroup>
                    </Col>

                    <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                        <InputGroup className="">
                            <InputGroup.Text id="tipoCliente" className='fw-bold'>Tipo pedido interno</InputGroup.Text>
                            <Form.Control aria-label="Tipo cliente" aria-describedby="tipoCliente" type='text' />
                        </InputGroup>
                    </Col>

                    <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                        <InputGroup className="">
                            <InputGroup.Text id="codCliente" className='fw-bold'>Estado</InputGroup.Text>
                            <Form.Control aria-label="Cod cliente" aria-describedby="codCliente" type='number' />
                        </InputGroup>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                        <InputGroup className="">
                            <InputGroup.Text id="codCliente" className='fw-bold'>Pedido Maestro</InputGroup.Text>
                            <Form.Control aria-label="Cod cliente" aria-describedby="codCliente" type='number' />
                        </InputGroup>
                    </Col>

                    <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                        <InputGroup className="">
                            <InputGroup.Text id="estado" className='fw-bold'>Cod pedido Padre</InputGroup.Text>
                            <Form.Control aria-label="Estado" aria-describedby="estado" type='text' />
                        </InputGroup>
                    </Col>

                    <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                        <InputGroup className="">
                            <InputGroup.Text id="tipoCliente" className='fw-bold'>Version validacion</InputGroup.Text>
                            <Form.Control aria-label="Tipo cliente" aria-describedby="tipoCliente" type='text' />
                        </InputGroup>
                    </Col>

                    <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                        <InputGroup className="">
                            <InputGroup.Text id="codCliente" className='fw-bold'>Fecha Estado</InputGroup.Text>
                            <Form.Control aria-label="Cod cliente" aria-describedby="codCliente" type='number' />
                        </InputGroup>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                        <InputGroup className="">
                            <InputGroup.Text id="codCliente" className='fw-bold'>Cod cliente</InputGroup.Text>
                            <Form.Control aria-label="Cod cliente" aria-describedby="codCliente" type='number' />
                        </InputGroup>
                    </Col>

                    <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                        <InputGroup className="">
                            <InputGroup.Text id="estado" className='fw-bold'>Cod sucursal</InputGroup.Text>
                            <Form.Control aria-label="Estado" aria-describedby="estado" type='text' />
                        </InputGroup>
                    </Col>

                    <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                        <InputGroup className="">
                            <InputGroup.Text id="tipoCliente" className='fw-bold'>Cod vendedor</InputGroup.Text>
                            <Form.Control aria-label="Tipo cliente" aria-describedby="tipoCliente" type='text' />
                        </InputGroup>
                    </Col>

                    <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                        <InputGroup className="">
                            <InputGroup.Text id="codCliente" className='fw-bold'>Maquila</InputGroup.Text>
                            <Form.Control aria-label="Cod cliente" aria-describedby="codCliente" type='number' />
                        </InputGroup>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                        <InputGroup className="">
                            <InputGroup.Text id="codCliente" className='fw-bold'>Cod pedido</InputGroup.Text>
                            <Form.Control aria-label="Cod cliente" aria-describedby="codCliente" type='date' />
                        </InputGroup>
                    </Col>

                    <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                        <InputGroup className="">
                            <InputGroup.Text id="estado" className='fw-bold'>Orden compra</InputGroup.Text>
                            <Form.Control aria-label="Estado" aria-describedby="estado" type='date' />
                        </InputGroup>
                    </Col>

                    <Col xs={12} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                        <InputGroup className="">
                            <InputGroup.Text id="tipoCliente" className='fw-bold'>Precio pedido</InputGroup.Text>
                            <Form.Control aria-label="Tipo cliente" aria-describedby="tipoCliente" type='text' />
                        </InputGroup>
                    </Col>

                </Row>
            </Form>

            <Table striped bordered hover responsive size="sm">
                <thead>
                    <tr>
                        <th>Tipo material</th>
                        <th>Descripcion</th>
                        <th>Coleccion</th>
                        <th>Cliente</th>
                        <th>Sku venta</th>
                        <th>Calidad</th>
                        <th>Producto OrdenesProduccion</th>
                        <th>Descripcion</th>
                        <th>Cantidad Inicial</th>
                        <th>Cantidad Pedida</th>
                        <th>Cantidad Cancelada</th>
                        <th>Cantidad Despachada</th>
                        <th>Estado</th>
                        <th>Fecha Estado</th>
                        <th>Fecha Entrega</th>
                        <th>Fecha Produccion</th>
                        <th>Color prioridad</th>
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
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="fixed-column">
                                <div className="d-flex p-2">
                                    <span  onClick={() => handleShow} style={{ cursor: 'pointer' }}>
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

export default Pedidos
import React from 'react';
import { Table, Pagination, Button } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import "../assets/styles/table.css";
import SweetAlert from './sweetAlert';
import { useForm } from '../App/useForm';
import PlaintextExample from './tipos';
import BasicModal from './modal';

function BasicTable() {
    const { show, handleClose, handleShow } = useForm();

    const [alertResponse, setAlertResponse] = React.useState(null);
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = Math.ceil(50 / itemsPerPage); // data.length

    const handleAlertResponse = (response) => {
        setAlertResponse(response);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const data = [
        { code: 1, tc: 'John', te: 25, description: "Lorep ipsum sit amet dolore", sequence: 3, n1: 1, n2: 1, n3: 1, n4: 1, c1: 2, c2: 2, c3: 2, c4: 4 },
        { code: 2, tc: 'Manu', te: 22, description: "Lorep ipsum sit amet dolore", sequence: 2, n1: 1, n2: 1, n3: 1, n4: 1, c1: 2, c2: 2, c3: 2, c4: 4 },
        { code: 3, tc: 'Kim', te: 20, description: "Lorep ipsum sit amet dolore", sequence: 5, n1: 1, n2: 1, n3: 1, n4: 1, c1: 2, c2: 2, c3: 2, c4: 4 },
        { code: 4, tc: 'Rob', te: 15, description: "Lorep ipsum sit amet dolore", sequence: 1, n1: 1, n2: 1, n3: 1, n4: 1, c1: 2, c2: 2, c3: 2, c4: 4 },
        // Agrega más objetos de datos aquí...
    ];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);


    return (
        <>
            <Table striped bordered hover responsive size="sm">
                <thead>
                    <tr>
                        <th> Codigo</th>
                        <th>Tipo cadena</th>
                        <th>Tipo entero</th>
                        <th>Descripcion</th>
                        <th>Secuencia</th>
                        <th>Atributo N1</th>
                        <th>Atributo N2</th>
                        <th>Atributo N3</th>
                        <th>Atributo N4</th>
                        <th>Atributo C1</th>
                        <th>Atributo C2</th>
                        <th>Atributo C3</th>
                        <th>Atributo C4</th>
                        <th className="fixed-column">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {currentData.map((item) => (
                        <tr key={item.code}>
                            <td>{item.code}</td>
                            <td>{item.tc}</td>
                            <td>{item.te}</td>
                            <td>{item.description}</td>
                            <td>{item.sequence}</td>
                            <td>{item.n1}</td>
                            <td>{item.n2}</td>
                            <td>{item.n3}</td>
                            <td>{item.n4}</td>
                            <td>{item.c1}</td>
                            <td>{item.c2}</td>
                            <td>{item.c3}</td>
                            <td>{item.c4}</td>
                            <td className="fixed-column">
                                <div className="d-flex p-2">
                                    <span onClick={handleShow} style= {{cursor: 'pointer'}}>
                                          <Pencil color="royalblue" size={24} title="Editar" />
                                    </span>
                                         {/* Aca tendria que enviar el id  */}
                                    {
                                        show && (
                                            <BasicModal handleClose={handleClose} title={"Editar"}>
                                                <PlaintextExample />
                                            </BasicModal>
                                        )}

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
            <div className='d-flex justify-content-center'>
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    />
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            active={index + 1 === currentPage}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    />
                    <Pagination.Last />
                </Pagination>
            </div>
        </>
    );
}

export default BasicTable;
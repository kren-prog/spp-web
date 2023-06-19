import React from 'react'
import { Table } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import { useForm } from '../../App/useForm';
import SweetAlert from '../SweetAlert';
import BasicPaginate from '../BasicPaginate';
import BasicModal from '../BasicModal';
import OpcionalForm from './OpcionalForm';

function OpcionalTable() {
    const { show, handleClose, handleShow } = useForm();
    const [alertResponse, setAlertResponse] = React.useState(null);
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = Math.ceil(50 / itemsPerPage); // data.length

    const handleAlertResponse = (response) => {
        setAlertResponse(response);
    };

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    const data = [
        { code: 1, tc: 'CUENTO', cc: 0, description: "SIN ASIGNAR ", sequence: 3, n1: 1, n2: 1, n3: 1, c1: 2, c2: 2, c3: 2 },
        { code: 2, tc: 'CUENTO', cc: 1, description: "BMX", sequence: 2, n1: 1, n2: 1, n3: 1, c1: 2, c2: 2, c3: 2 },
        { code: 3, tc: 'CUENTO', cc: 2, description: "CICLISMO", sequence: 5, n1: 1, n2: 1, n3: 1, c1: 2, c2: 2, c3: 2 },
        { code: 4, tc: 'LINEA', cc: 3, description: "EVENTOS", sequence: 1, n1: 1, n2: 1, n3: 1, c1: 2, c2: 2, c3: 2 },
        { code: 5, tc: 'LINEA', cc: 3, description: "LIFE STYLE", sequence: 1, n1: 1, n2: 1, n3: 1, c1: 2, c2: 2, c3: 2 },
        { code: 6, tc: 'LINEA', cc: 3, description: "URBAN", sequence: 1, n1: 1, n2: 1, n3: 1, c1: 2, c2: 2, c3: 2 },
        { code: 7, tc: 'LINEA', cc: 3, description: "PATINAJE", sequence: 1, n1: 1, n2: 1, n3: 1, c1: 2, c2: 2, c3: 2 },
        { code: 8, tc: 'LINEA', cc: 3, description: "PRESENTACION", sequence: 1, n1: 1, n2: 1, n3: 1, c1: 2, c2: 2, c3: 2 },
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
                        <th>Tipo clasificación</th>
                        <th>Codigo clasificación</th>
                        <th>Descripcion</th>
                        <th>Secuencia</th>
                        <th>Atributo N1</th>
                        <th>Atributo N2</th>
                        <th>Atributo N3</th>
                        <th>Atributo C1</th>
                        <th>Atributo C2</th>
                        <th>Atributo C3</th>
                        <th className="fixed-column">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {currentData.map((item) => (
                        <tr key={item.code}>
                            <td>{item.tc}</td>
                            <td>{item.cc}</td>
                            <td>{item.description}</td>
                            <td>{item.sequence}</td>
                            <td>{item.n1}</td>
                            <td>{item.n2}</td>
                            <td>{item.n3}</td>
                            <td>{item.c1}</td>
                            <td>{item.c2}</td>
                            <td>{item.c3}</td>
                            <td className="fixed-column">
                            <div className="d-flex p-2">
                                    <span onClick={handleShow} style={{ cursor: 'pointer' }}>
                                        <Pencil color="royalblue" size={24} title="Editar" />
                                    </span>
                                    {/* Aca tendria que enviar el id  */}
                                    {
                                        show && (
                                            <BasicModal handleClose={handleClose} title={"Editar"}>
                                                <OpcionalForm />
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
                <BasicPaginate totalPages={totalPages} handlePageClick={handlePageClick} />
            </div>
        </>
    )
}

export default OpcionalTable
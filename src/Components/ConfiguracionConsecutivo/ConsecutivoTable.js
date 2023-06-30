import React from 'react'
import { Table } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import { useForm } from '../../App/useForm';
import SweetAlert from '../SweetAlert';
import BasicModal from '../BasicModal';
import BasicPaginate from '../BasicPaginate';
import ConsecutivoForm from './ConsecutivoForm';

function ConsecutivoTable() {
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
        { code: 1, identificador: 'John', description: "Lorep ipsum sit amet dolore", prefijo: 3, sufijo: 1, numInicio: 1, incremento: 1, numAviso: 1, numFInal: 2, numActual: 2, c3: 2, c4: 4 },
        { code: 2, identificador: 'Manu', description: "Lorep ipsum sit amet dolore", prefijo: 2, sufijo: 1, numInicio: 1, incremento: 1, numAviso: 1, numFInal: 2, numActual: 2, c3: 2, c4: 4 },
        { code: 3, identificador: 'Kim', description: "Lorep ipsum sit amet dolore", prefijo: 5, sufijo: 1, numInicio: 1, incremento: 1, numAviso: 1, numFInal: 2, numActual: 2, c3: 2, c4: 4 },
        { code: 4, identificador: 'Rob', description: "Lorep ipsum sit amet dolore", prefijo: 1, sufijo: 1, numInicio: 1, incremento: 1, numAviso: 1, numFInal: 2, numActual: 2, c3: 2, c4: 4 },
        // Agrega más objetos de datos aquí...
    ];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    return (
        <>
          <div className="table-responsive-lg">
            <Table striped bordered hover size="sm" className="table-auto">
                <thead>
                    <tr>
                        <th>Identificador</th>
                        <th>Descripcion</th>
                        <th>Prefijo</th>
                        <th>Sufijo</th>
                        <th>Numero inicio</th>
                        <th>Incremento</th>
                        <th>Numero aviso</th>
                        <th>Numero final</th>
                        <th>Numero actual</th>
                        <th className="fixed-column">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {currentData.map((item) => (
                        <tr key={item.code}>
                            <td>{item.identificador}</td>
                            <td>{item.description}</td>
                            <td>{item.prefijo}</td>
                            <td>{item.sufijo}</td>
                            <td>{item.numInicio}</td>
                            <td>{item.incremento}</td>
                            <td>{item.numAviso}</td>
                            <td>{item.numFInal}</td>
                            <td>{item.numActual}</td>
                            <td className="fixed-column">
                                <div className="d-flex p-2">
                                <span onClick={handleShow} style={{ cursor: 'pointer' }}>
                                        <Pencil color="royalblue" size={24} title="Editar" />
                                    </span>
                                    {/* Aca tendria que enviar el id  */}
                                    {
                                        show && (
                                            <BasicModal handleClose={handleClose} title={"Editar"}>
                                                <ConsecutivoForm />
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
            </div>
            <div className='d-flex justify-content-center'>
                <BasicPaginate totalPages={totalPages} handlePageClick={handlePageClick} />
            </div>
        </>
    )
}

export default ConsecutivoTable
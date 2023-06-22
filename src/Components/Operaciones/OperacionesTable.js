import React from 'react'
import { Table } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import { useForm } from '../../App/useForm';
import SweetAlert from '../SweetAlert';
import BasicPaginate from '../BasicPaginate';
import BasicModal from '../BasicModal';
import OperacionesForm from './OperacionesForm';

function OperacionesTable() {
    // buscar una forma de reducir el codigo de setRegistroEditado y setValues (en OperacionesForm)
    // tal vez usando el hook useForm
    const [registroEditado, setRegistroEditado] = React.useState({});
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

    const abrirModal = (registro) => {
        handleShow();
        setRegistroEditado(registro);
    };

    const data = [
        { code: 'CON', description: 'Confeccion', observacion: 'Confeccion' },
        { code: 'EMP', description: 'Empaque', observacion: 'Empaque' },
    ];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    return (
        <>
            <Table striped bordered hover responsive size="sm">
                <thead>
                    <tr>
                        <th>Codigo operacion</th>
                        <th>Descripcion</th>
                        <th>Observacion</th>
                        <th className="fixed-column">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {currentData.map((item) => (
                        <tr key={item.code}>
                            <td>{item.code}</td>
                            <td>{item.description}</td>
                            <td>{item.observacion}</td>
                            <td className="fixed-column">
                                <div className="d-flex p-2">
                                    <span  onClick={() => abrirModal(item)} style={{ cursor: 'pointer' }}>
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


            <div className='d-flex justify-content-center'>
                <BasicPaginate totalPages={totalPages} handlePageClick={handlePageClick} />
            </div>

            {
                show && (
                    <BasicModal handleClose={handleClose} title={"Editar"}>
                        <OperacionesForm operacion={registroEditado} />
                    </BasicModal>
                )}
        </>
    )
}

export default OperacionesTable
import React from 'react';
import { Table } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import SweetAlert from '../SweetAlert';
import { useForm } from '../../App/useForm';
import FamiliaDisenoForm from './FamiliaDisenoForm';
import BasicModal from '../BasicModal';
import BasicPaginate from '../BasicPaginate';

function FamiliaDisenoTable() {
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
        { type: 'PRENDAS', code: 10, description: "Lorep ipsum sit amet dolore", shortDesc: "Lore" },
        { type: 'DEPORTIVA', code: 20, description: "Lorep ipsum sit amet dolore", shortDesc: "Lore" },
        { type: 'CASUAL', code: 30, description: "Lorep ipsum sit amet dolore", shortDesc: "Lore" },
        { type: 'ELEGANTE', code: 40, description: "Lorep ipsum sit amet dolore", shortDesc: "Lore" }
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
                        <th>Género</th>
                        <th>Código Diseño</th>
                        <th>Descripción Diseño</th>
                        <th>Desc. Corta</th>
                        <th className="fixed-column">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {currentData.map((item) => (
                        <tr key={item.code}>
                            <td>{item.code}</td>
                            <td>{item.type}</td>
                            <td>{item.description}</td>
                            <td>{item.shortDesc}</td>
                            <td className="fixed-column">
                                <div className="d-flex p-2">
                                    <span onClick={handleShow} style={{ cursor: 'pointer' }}>
                                        <Pencil color="royalblue" size={24} title="Editar" />
                                    </span>
                                    {/* Aca tendria que enviar el id  */}
                                    {
                                        show && (
                                            <BasicModal handleClose={handleClose} title={"Editar"}>
                                                <FamiliaDisenoForm />
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
    );
}

export default FamiliaDisenoTable;
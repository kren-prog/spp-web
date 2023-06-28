import React from 'react';
import { Table } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import SweetAlert from '../SweetAlert';
import { useForm } from '../../App/useForm';
import CurvasEficienciaForm from './CurvasEficienciaForm';
import BasicModal from '../BasicModal';
import BasicPaginate from '../BasicPaginate';

function CurvasEficienciaTable() {
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
        { type: 'PRENDAS', code: 10, description: "Lorep ipsum sit amet dolore" },
        { type: 'DEPORTIVA', code: 20, description: "Lorep ipsum sit amet dolore" },
        { type: 'CASUAL', code: 30, description: "Lorep ipsum sit amet dolore" },
        { type: 'ELEGANTE', code: 40, description: "Lorep ipsum sit amet dolore" }
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
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>A</th>
                        <th>B</th>
                        <th>Tipo Planeador</th>
                        <th>Día Estabilidad</th>
                        <th>Ubicación Curva</th>
                        <th>Recurso Curva</th>
                        <th>Agrupación Recurso</th>
                        <th>Referencia</th>
                        <th>Agrupación Referencia</th>
                        <th className="fixed-column">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {currentData.map((item) => (
                        <tr key={item.code}>
                            <td>{item.code}</td>
                            <td>{item.description}</td>
                            <td>{item.A}</td>
                            <td>{item.B}</td>
                            <td>{item.type}</td>
                            <td>{item.de}</td>
                            <td>{item.uc}</td>
                            <td>{item.rc}</td>
                            <td>{item.ar}</td>
                            <td>{item.recurso}</td>
                            <td>{item.arecurso}</td>
                            <td className="fixed-column">
                                <div className="d-flex p-2">
                                    <span onClick={handleShow} style={{ cursor: 'pointer' }}>
                                        <Pencil color="royalblue" size={24} title="Editar" />
                                    </span>
                                    {/* Aca tendria que enviar el id  */}
                                    {
                                        show && (
                                            <BasicModal handleClose={handleClose} title={"Editar"}>
                                                <CurvasEficienciaForm />
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

export default CurvasEficienciaTable;
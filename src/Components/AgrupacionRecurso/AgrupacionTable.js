import React from 'react'
import { Table } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import SweetAlert from '../SweetAlert';
import { useForm } from '../../App/useForm';
import BasicModal from '../BasicModal';
import BasicPaginate from '../BasicPaginate';
import AgrupacionForm from './AgrupacionForm';

function AgrupacionTable() {

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
        { code: 'KLG', description: 'Kilogramos', decimal: 1, magnitud: 'Masa' },
        { code: 'UN', description: 'Unidad', decimal: 0, magnitud: 'Otras' },
        { code: 'MTS', description: 'Metros', decimal: 1, magnitud: 'Longitud' },
        { code: 'PRE', description: 'Prendas', decimal: 0, magnitud: 'Superficie' },
    ];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    return (
        <>
            <Table striped bordered hover responsive size="sm" className='mt-3'>
                <thead>
                    <tr>
                        <th>Tipo recurso</th>
                        <th>Agrupacion</th>
                        <th>Descripcion</th>
                        <th>Rpm</th>
                        <th>Mts</th>
                        <th>Eficiencia</th>
                        <th>Produccion</th>
                        <th>Carga minima</th>
                        <th>Tiempo estandar</th>
                        <th className="fixed-column">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {currentData.map((item) => (
                        <tr key={item.code}>
                            <td>{item.decimal}</td>
                            <td>{item.magnitud}</td>
                            <td>{item.description}</td>
                            <td>{item.decimal}</td>
                            <td>{item.magnitud}</td>
                            <td>{item.description}</td>
                            <td>{item.decimal}</td>
                            <td>{item.magnitud}</td>
                            <td>{item.description}</td>
                            <td className="fixed-column ">
                                <div className="d-flex p-2">
                                    <span onClick={handleShow} style={{ cursor: 'pointer' }}>
                                        <Pencil color="royalblue" size={24} title="Editar" />
                                    </span>
                                    {/* Aca tendria que enviar el id  */}
                                    {
                                        show && (
                                            <BasicModal handleClose={handleClose} title={"Editar"}>
                                                <AgrupacionForm />
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

export default AgrupacionTable
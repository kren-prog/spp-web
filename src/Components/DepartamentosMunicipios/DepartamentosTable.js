import React from 'react'
import { Table } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import { useForm } from '../../App/useForm';
import SweetAlert from '../SweetAlert';
import BasicPaginate from '../BasicPaginate';
import BasicModal from '../BasicModal';
import DepartamentosForm from './DepartamentosForm';

function DepartamentosTable() {
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
                                    <span onClick={handleShow} style={{ cursor: 'pointer' }}>
                                        <Pencil color="royalblue" size={24} title="Editar" />
                                    </span>
                                    {/* Aca tendria que enviar el id  */}
                                    {
                                        show && (
                                            <BasicModal handleClose={handleClose} title={"Editar"}>
                                                <DepartamentosForm />
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

export default DepartamentosTable
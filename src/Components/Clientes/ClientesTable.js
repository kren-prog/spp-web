import React from 'react'
import { Table, Row } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import { useForm } from '../../App/useForm';
import SweetAlert from '../SweetAlert';
import BasicPaginate from '../BasicPaginate';
import BasicModal from '../BasicModal';
import ClientesForm from './ClientesForm';
import SearchBar from '../SearchBar';
import ItemsPerPage from '../ItemsPerPage';

function ClientesTable() {

    const { show, handleClose, handleShow, searchTerm, handleSearch, numberOfRows, itemsPerPage, handleChangeItems, alertResponse, handleAlertResponse } = useForm();

    const [currentPage, setCurrentPage] = React.useState(1);
  
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    const data = [
        { code: 'CON', description: 'Confeccion', observacion: 'Confeccion' },
        { code: 'EMP', description: 'Empaque', observacion: 'Empaque' },
    ];

    const totalPages = Math.ceil(data.length / itemsPerPage); // data.length
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const filteredData = data.filter((item) =>
        Object.values(item).some(
            (value) =>
                typeof value === 'string' &&
                value.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    const currentData = filteredData.slice(startIndex, endIndex);

    return (
        <>
         <Row>
                <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

                <ItemsPerPage handleChangeItems={handleChangeItems} numberOfRows={numberOfRows} />
            </Row>

            <Table striped bordered hover responsive size="sm" className='table-condensed'>
                <thead>
                    <tr>
                        <th>Cod sucursal</th>
                        <th>Nombre sucursal</th>
                        <th>Direccion</th>
                        <th>Telefono 1</th>
                        <th>Telefono 2</th>
                        <th>Pais</th>
                        <th>Departamento</th>
                        <th>Municipio</th>
                        <th>Email</th>
                        <th>Contacto</th>
                        <th>Estado</th>
                        <th>Agente Retenedor</th>
                        <th>Regimen</th>

                        <th className="fixed-column">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {currentData.map((item) => (
                        <tr key={item.code}>
                            <td>{item.code}</td>
                            <td>{item.tipo}</td>
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
                                    <span onClick={handleShow} style={{ cursor: 'pointer' }}>
                                        <Pencil color="royalblue" size={24} title="Editar" />
                                    </span>
                                    {/* Aca tendria que enviar el id  */}
                                    {
                                        show && (
                                            <BasicModal handleClose={handleClose} title={"Editar"}>
                                                <ClientesForm />
                                            </BasicModal>
                                        )}

                                    <SweetAlert onAlertResponse={handleAlertResponse}
                                        title="Esta seguro?"
                                        text="Se eliminara el item."
                                        icon="warning"
                                        typebtn="delete"
                                    />
                                     {/* <p> {alertResponse}</p> */}

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

export default ClientesTable
import React from 'react'
import { Table, Row } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import { useForm } from '../../App/useForm';
import SweetAlert from '../SweetAlert';
import BasicPaginate from '../BasicPaginate';
import BasicModal from '../BasicModal';
import OProcesoForm from './OProcesoForm';
import SearchBar from '../SearchBar';
import ItemsPerPage from '../ItemsPerPage';

function OProcesoTable() {

    const { show, handleClose, handleShow, searchTerm, handleSearch, numberOfRows, itemsPerPage, handleChangeItems, alertResponse, handleAlertResponse } = useForm();
    
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = Math.ceil(50 / itemsPerPage); // data.length

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    const data = [
        { code: 'CON', description: 'Confeccion', observacion: 'Confeccion' },
        { code: 'EMP', description: 'Empaque', observacion: 'Empaque' },
    ];

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
            <Table striped bordered hover responsive size="sm" className='mt-3'>
                <thead>
                    <tr>
                        <th>Operacion</th>
                        <th>Tipo material</th>
                        <th>Flujo</th>
                        <th>Proceso</th>
                        <th>Referencia</th>
                        <th>Tipo recurso</th>
                        <th>Agrupacion</th>
                        <th>Rpm</th>
                        <th>Mts</th>
                        <th>Produccion</th>
                        <th>Tiempo estandar</th>
                        <th>Eficiencia</th>
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

                            <td className="fixed-column">
                                <div className="d-flex p-2">
                                    <span onClick={handleShow} style={{ cursor: 'pointer' }}>
                                        <Pencil color="royalblue" size={24} title="Editar" />
                                    </span>
                                    {/* Aca tendria que enviar el id  */}
                                    {
                                        show && (
                                            <BasicModal handleClose={handleClose} title={"Editar"}>
                                                <OProcesoForm />
                                            </BasicModal>
                                        )}

                                    <SweetAlert onAlertResponse={handleAlertResponse}
                                        title="Esta seguro?"
                                        text="Se eliminara el item."
                                        icon="warning"
                                        typebtn="delete"
                                    />
                                   
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

export default OProcesoTable
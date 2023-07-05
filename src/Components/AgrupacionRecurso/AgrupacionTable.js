import React from 'react'
import { Table, Row } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import SweetAlert from '../SweetAlert';
import { useForm } from '../../App/useForm';
import BasicModal from '../BasicModal';
import BasicPaginate from '../BasicPaginate';
import AgrupacionForm from './AgrupacionForm';
import SearchBar from '../SearchBar';
import ItemsPerPage from '../ItemsPerPage';

function AgrupacionTable() {

    const { show, handleClose, handleShow, searchTerm, handleSearch, numberOfRows, itemsPerPage, handleChangeItems, alertResponse, handleAlertResponse } = useForm();
    
    const [currentPage, setCurrentPage] = React.useState(1);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    const data = Array.from({ length: 30 }, (_, index) => ({
        code: 'KLG' + 1,
        description: `Kilogramos${index}`,
        decimal: index,
        magnitud: 'Masa',
    }));

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
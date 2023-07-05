import React from 'react'
import { Table, Row } from 'react-bootstrap';
import { Filter, Pencil } from 'react-bootstrap-icons';
import { useForm } from '../../App/useForm';
import SweetAlert from '../SweetAlert';
import BasicPaginate from '../BasicPaginate';
import BasicModal from '../BasicModal';
import OpcionalForm from './OpcionalForm';
import SearchBar from '../SearchBar';
import ItemsPerPage from '../ItemsPerPage';

function OpcionalTable() {

    const { show, handleClose, handleShow, searchTerm, handleSearch, numberOfRows, itemsPerPage, handleChangeItems, alertResponse, handleAlertResponse } = useForm();

    const [currentPage, setCurrentPage] = React.useState(1);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    const data = Array.from({ length: 25 }, (_, index) => ({
        code: index + 1,
        tc: `CUENTO ${index + 1}`,
        CC: index,
        description: `description${index} description${index + 1} `,
        sequence: index,
        n1: index,
        n2: index,
        n3: index,
        c1: index,
        c2: index,
        c3: index
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
                            <td className='text-center'>{item.sequence}</td>
                            <td className='text-center'>{item.n1}</td>
                            <td className='text-center'>{item.n2}</td>
                            <td className='text-center'>{item.n3}</td>
                            <td className='text-center'>{item.c1}</td>
                            <td className='text-center'>{item.c2}</td>
                            <td className='text-center'>{item.c3}</td>
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
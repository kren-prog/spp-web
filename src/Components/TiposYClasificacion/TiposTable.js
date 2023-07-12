import React from 'react';
import { Table, Row } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import SweetAlert from '../SweetAlert';
import { useForm } from '../../App/useForm';
import TiposForm from './TiposForm';
import BasicModal from '../BasicModal';
import BasicPaginate from '../BasicPaginate';
import SearchBar from '../SearchBar';
import ItemsPerPage from '../ItemsPerPage';

function TableTipos() {

    const { show, handleClose, handleShow, searchTerm, handleSearch, numberOfRows, itemsPerPage, handleChangeItems, alertResponse, handleAlertResponse } = useForm();

    const [currentPage, setCurrentPage] = React.useState(0);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    const data = Array.from({ length: 40 }, (_, index) => ({
        code: index + 1,
        tc: `cadena ${index + 1}`,
        te: index,
        description: `description${index} description${index + 1} `,
        sequence: index,
        n1: index,
        n2: index,
        n3: index,
        n4: index,
        c1: index,
        c2: index,
        c3: index,
        c4: index
    }));

    const totalPages = Math.ceil(data.length / itemsPerPage); // data.length

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Filtrar los datos basados en el término de búsqueda en cualquier campo
    const filteredData = data.filter((item) =>
        Object.values(item).some(
            (value) =>
                typeof value === 'string' &&
                value.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const currentData = filteredData.slice(startIndex, endIndex);

    // filtrar por un campo en especifico
    const filteredData2 = currentData.filter((item) =>
        item.tc.toLowerCase().includes(searchTerm.toLowerCase()));


    return (
        <>
            <Row>
                <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

                <ItemsPerPage handleChangeItems={handleChangeItems} numberOfRows={numberOfRows} />
            </Row>

            <Table striped bordered hover responsive size="sm" className='table-condensed'>

                <thead>
                    <tr>
                        <th> Codigo</th>
                        <th>Tipo cadena</th>
                        <th>Tipo entero</th>
                        <th>Descripcion</th>
                        <th>Secuencia</th>
                        <th>Atributo N1</th>
                        <th>Atributo N2</th>
                        <th>Atributo N3</th>
                        <th>Atributo N4</th>
                        <th>Atributo C1</th>
                        <th>Atributo C2</th>
                        <th>Atributo C3</th>
                        <th>Atributo C4</th>
                        <th className="fixed-column">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {currentData.map((item) => (
                        <tr key={item.code}>
                            <td>{item.code}</td>
                            <td>{item.tc}</td>
                            <td className='text-center'>{item.te}</td>
                            <td>{item.description}</td>
                            <td className='text-center'>{item.sequence}</td>
                            <td className='text-center'>{item.n1}</td>
                            <td className='text-center'>{item.n2}</td>
                            <td className='text-center'>{item.n3}</td>
                            <td className='text-center'>{item.n4}</td>
                            <td className='text-center'>{item.c1}</td> 
                            <td className='text-center'>{item.c2}</td>
                            <td className='text-center'>{item.c3}</td>
                            <td className='text-center'>{item.c4}</td>
                            <td className="fixed-column">
                                <div className="d-flex p-2">
                                    <span onClick={handleShow} style={{ cursor: 'pointer' }}>
                                        <Pencil color="royalblue" size={24} title="Editar" />
                                    </span>
                                    {/* Aca tendria que enviar el id  */}
                                    {
                                        show && (
                                            <BasicModal handleClose={handleClose} title={"Editar"}>
                                                <TiposForm />
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
    );
}

export default TableTipos;
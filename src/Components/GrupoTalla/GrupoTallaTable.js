import React from 'react';
import { Table, Row } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import SweetAlert from '../SweetAlert';
import { useForm } from '../../App/useForm';
import GrupoTallaForm from './GrupoTallaForm';
import BasicModal from '../BasicModal';
import BasicPaginate from '../BasicPaginate';
import SearchBar from '../SearchBar';
import ItemsPerPage from '../ItemsPerPage';

function GrupoTallaTable() { 

    const { show, handleClose, handleShow, searchTerm, handleSearch, numberOfRows, itemsPerPage, handleChangeItems, alertResponse, handleAlertResponse } = useForm();

    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = Math.ceil(50 / itemsPerPage); // data.length


    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }
  
    const data = [
        { type: 'PRENDAS', code: 10, description: "Lorep ipsum sit amet dolore", shortDesc: "Lore", genre: "UNISEX", unit: "cms"},
        { type: 'DEPORTIVA', code: 20, description: "Lorep ipsum sit amet dolore", shortDesc: "Lore", genre: "FEMENINO", unit: "cms" },
        { type: 'CASUAL', code: 30, description: "Lorep ipsum sit amet dolore", shortDesc: "Lore", genre: "MASCULINO", unit: "cms" },
        { type: 'ELEGANTE', code: 40, description: "Lorep ipsum sit amet dolore", shortDesc: "Lore", genre: "UNISEX", unit: "cms" }
        // Agrega más objetos de datos aquí...
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
            <Table striped bordered hover responsive size="sm">
                <thead>
                    <tr>
                        <th>Tipo Material</th>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Desc. Corta</th>
                        <th>Género</th>
                        <th>Unidad</th>
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
                            <td>{item.genre}</td>
                            <td>{item.unit}</td>
                            <td className="fixed-column">
                                <div className="d-flex p-2">
                                    <span onClick={handleShow} style={{ cursor: 'pointer' }}>
                                        <Pencil color="royalblue" size={24} title="Editar" />
                                    </span>
                                    {/* Aca tendria que enviar el id  */}
                                    {
                                        show && (
                                            <BasicModal handleClose={handleClose} title={"Editar"}>
                                                <GrupoTallaForm />
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
    );
}

export default GrupoTallaTable;
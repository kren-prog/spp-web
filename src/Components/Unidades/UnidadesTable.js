import React, { useEffect, useState } from 'react'
import { Table, Row } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import UnidadesForm from './UnidadesForm';
import SweetAlert from '../SweetAlert';
import { useForm } from '../../App/useForm';
import BasicModal from '../BasicModal';
import BasicPaginate from '../BasicPaginate';
import SearchBar from '../SearchBar';
import ItemsPerPage from '../ItemsPerPage';
import axios from 'axios';

function UnidadesTable() {

    const { show, handleClose, handleShow, searchTerm, handleSearch, numberOfRows, itemsPerPage, handleChangeItems, alertResponse, handleAlertResponse } = useForm();

    const [currentPage, setCurrentPage] = React.useState(1);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }
    // http://www.ingesoftware.net:8015/api/IsUnidades
    const url = 'https://localhost:7197/api/IsUnidades';
    const [unidades, setUnidades] = useState([]);
    const [codUnidad, setCodUnidad] = useState('');
    const [desUnidad, setDesUnidad] = useState('');
    const [usaDecimal, setUsaDecimal] = useState(1);
    const [magnitud, setMagnitud] = useState('');

    useEffect(() => {
        getUnidades();
    }, []);

    const getUnidades = async () => {
        const respuesta = await axios.get(url);
        console.log(respuesta.status);
        setUnidades(respuesta.data.data);
    }

    const data = [
        { code: 'KLG', description: 'Kilogramos', decimal: 1, magnitud: 'Masa' },
        { code: 'UN', description: 'Unidad', decimal: 0, magnitud: 'Otras' },
        { code: 'MTS', description: 'Metros', decimal: 1, magnitud: 'Longitud' },
        { code: 'PRE', description: 'Prendas', decimal: 0, magnitud: 'Superficie' },
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
            <Table striped bordered hover responsive size="sm">
                <thead>
                    <tr>
                        <th>Cod Unidad</th>
                        <th>Descripcion</th>
                        <th>Usa decimal</th>
                        <th>Magnitud</th>
                        <th className="fixed-column">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {unidades.map((unidad) => (
                        <tr key={unidad.codUnidad}>
                            <td>{unidad.codUnidad}</td>
                            <td>{unidad.desUnidad}</td>
                            <td>{unidad.usaDecimal}</td>
                            <td>{unidad.magnitud}</td>
                            <td className="fixed-column">
                                <div className="d-flex p-2">
                                    <span onClick={handleShow} style={{ cursor: 'pointer' }}>
                                        <Pencil color="royalblue" size={24} title="Editar" />
                                    </span>
                                    {/* Aca tendria que enviar el id  */}
                                    {
                                        show && (
                                            <BasicModal handleClose={handleClose} title={"Editar"}>
                                                <UnidadesForm />
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

export default UnidadesTable
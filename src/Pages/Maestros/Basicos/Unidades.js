import React, { useEffect, useState }  from 'react'
import {  Row, Col, Button } from 'react-bootstrap';
import { PlusCircle } from 'react-bootstrap-icons';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import BasicPaginate from 'Components/BasicPaginate';
import ItemsPerPage from 'Components/ItemsPerPage';
import SearchBar from 'Components/SearchBar';
import { fetchData, createData, updateData, deleteData } from 'App/api';
import UnidadesModal from '../../../Components/Unidades/UnidadesModal';
import UnidadesTable from '../../../Components/Unidades/UnidadesTable';

function Unidades() {
    
    const url = 'IsUnidades';
    const [unidades, setUnidades] = useState([]);

    const [operacion, setOperacion] = useState(1); // Para diferenciar si se hace update o post

    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const [itemsPerPage, setItemsPerPage] = useState(10); // Valor predeterminado, ajusta según necesidades
    const [totalPages, setTotalPages] = useState(0);

    const [searchTerm, setSearchTerm] = useState('');

    const [loading, setLoading] = useState(true);

    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        getUnidades();
    }, [currentPage, itemsPerPage, searchTerm]);

    useEffect(() => {
        // Cuando cambia la página, actualiza los datos filtrados
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        if (unidades.length > 0) {

            const filteredResults = unidades.filter(item =>
                Object.values(item).some(value =>
                    value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
                )
            );

            setFilteredData(filteredResults.slice(startIndex, endIndex));
            setTotalPages(Math.ceil(filteredResults.length / itemsPerPage));
        }

    }, [unidades, currentPage, itemsPerPage, searchTerm]); // Actualiza los datos filtrados al cambiar la página o recibir nuevos datos

    const getUnidades = async () => {
        const result = await fetchData(url);
        // result es undefined cuando el status fue algo diferente de 200
        if (result !== undefined) {
            setUnidades(result);
            // Calcula la cantidad total de páginas en función de los datos y la cantidad de elementos por página
            setTotalPages(Math.ceil(result.length / itemsPerPage));

            // Asegura que la página actual no sea mayor que la última página
            const lastPage = Math.max(0, totalPages - 1);
            const actualPage = Math.min(currentPage, lastPage);
            setCurrentPage(actualPage);
        }
        setLoading(false);
    }

    const defaultValues = { codUnidad: "", desUnidad: "", usaDecimal: false, magnitud: "" };
    // MODAL
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = (op, unidad) => {
        setOperacion(op);
        setShow(true);
        setSelectedItem(defaultValues);
        if (op === 1) {
            setTitle("Registrar unidad");
        } else if (op === 2) {
            setTitle("Editar Unidad");
            setSelectedItem(unidad);
        }
    };

    // PAGINATE
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    const handleItemsPerPageChange = (e) => {
        const newItemsPerPage = parseInt(e.target.value, 10);
        setItemsPerPage(newItemsPerPage);
    };

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const enviarSolicitud = async (op, url, parametros) => {
        let result;
        if (op === 1) {
            result = await createData(url, parametros);
        } if (op === 2) {
            result = await updateData(url, parametros);
        } if (op === 3) {
            result = await deleteData(url);
        }
        if (result !== undefined) {
            getUnidades();
            handleClose();
        }
    }

    const confirmDeleteUnidad = (codUnidad, name) => {

        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: '¿Esta seguro?',
            icon: 'question',
            text: 'Se va a eliminar la unidad ' + name,
            showCancelButton: true, confirmButtonText: 'Si, eliminar', cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const newUrl = url + "/" + codUnidad.trim();
                enviarSolicitud(3, newUrl);
            }
        });
    }

    const onSubmit = (data) => {

        if (operacion === 1) {
            enviarSolicitud(1, url, data);
        } else {
            const newUrl = url + "/" + data.codUnidad.trim();
            enviarSolicitud(2, newUrl, data);
        }
    };

    return (
        <>
            <Row>
                <Button as={Col} md={2} lg={2} xl={2} variant="warning" className='btn btn-sm mb-2 ms-2 fw-bold text-white' onClick={() => handleShow(1)}>
                    Añadir  <PlusCircle color="white" size={18} title="Add" />
                </Button>

                <ItemsPerPage handleChangeItems={handleItemsPerPageChange} numberOfRows={itemsPerPage} />

                <SearchBar searchTerm={searchTerm} handleSearch={handleSearchTermChange} />
            </Row>

            <UnidadesTable loading={loading} filteredData={filteredData} handleShow={handleShow} confirmDeleteUnidad={confirmDeleteUnidad} />

            <div className='d-flex justify-content-center'>
                <BasicPaginate totalPages={totalPages} handlePageClick={handlePageClick} />
            </div>

            <UnidadesModal show={show} handleClose={handleClose} title={title} initialValues={selectedItem} onSubmit={onSubmit} />

        </>
    )
}

export default Unidades
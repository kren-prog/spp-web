import React, { useEffect, useState } from 'react'
import { Table, Row, Form, Col, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Pencil, BookmarkStarFill, PlusCircle, Trash } from 'react-bootstrap-icons';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import BasicPaginate from 'Components/BasicPaginate';
import ItemsPerPage from 'Components/ItemsPerPage';
import SearchBar from 'Components/SearchBar';
import { fetchData, createData, updateData, deleteData } from 'App/api';

function IsUnidades() {

    const url = 'IsUnidades';
    const [unidades, setUnidades] = useState([]);
    const [codUnidad, setCodUnidad] = useState('');
    const [desUnidad, setDesUnidad] = useState('');
    const [usaDecimal, setUsaDecimal] = useState(true);
    const [magnitud, setMagnitud] = useState('');

    const [operacion, setOperacion] = useState(1); // Para diferenciar si se hace update o post

    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const [itemsPerPage, setItemsPerPage] = useState(10); // Valor predeterminado, ajusta según necesidades
    const [totalPages, setTotalPages] = useState(0);

    const [searchTerm, setSearchTerm] = useState('');

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
    }
    const handleChangeUsaDecimal = () => {
        setUsaDecimal(!usaDecimal); // Invierte el valor actual al hacer clic en el checkbox
    };

    // MODAL
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = (op, codUnidad, desUnidad, usaDecimal, magnitud) => {
        setCodUnidad('');
        setDesUnidad('');
        setUsaDecimal('');
        setMagnitud('');
        setOperacion(op);
        setShow(true);
        if (op === 1) {
            setTitle("Registrar unidad");
        } else if (op === 2) {
            setTitle("Editar Unidad");
            setCodUnidad(codUnidad);
            setDesUnidad(desUnidad);
            setUsaDecimal(usaDecimal);
            setMagnitud(magnitud);
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

    const validar = () => {
        let newUrl = url;
        var parametros = {
            codUnidad: codUnidad.trim(),
            desUnidad: desUnidad.trim(),
            usaDecimal: usaDecimal,
            magnitud: magnitud.trim()
        };

        if (operacion === 1) {
            enviarSolicitud(1, url, parametros);
        } else {
            newUrl = url + "/" + codUnidad.trim();
            enviarSolicitud(2, newUrl, parametros);
        }

    };

    const enviarSolicitud = async (op, url, parametros) => {
        let result;
        if (op == 1) {
            result = await createData(url, parametros);
        } if (op == 2) {
            result = await updateData(url, parametros);
        } if(op == 3) {
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
                setCodUnidad(codUnidad);
                const newUrl = url + "/" + codUnidad.trim();
                enviarSolicitud(3, newUrl);
            }
        });
    }

    return (
        <>
            <Row>
                <Button as={Col} md={2} lg={2} xl={2} variant="warning" className='btn btn-sm mb-2 ms-2 fw-bold text-white' onClick={() => handleShow(1)}>
                    Añadir  <PlusCircle color="white" size={18} title="Add" />
                </Button>

                <ItemsPerPage handleChangeItems={handleItemsPerPageChange} numberOfRows={itemsPerPage} />

                <SearchBar searchTerm={searchTerm} handleSearch={handleSearchTermChange} />
            </Row>

            <Table striped bordered hover responsive size="sm">
                <thead>
                    <tr className='table-info'>
                        <th>Cod Unidad</th>
                        <th>Descripcion</th>
                        <th>Usa decimal</th>
                        <th>Magnitud</th>
                        <th className="fixed-column">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {filteredData.map((unidad) => (
                        <tr key={unidad.codUnidad}>
                            <td>{unidad.codUnidad}</td>
                            <td>{unidad.desUnidad}</td>
                            <td>{unidad.usaDecimal ? "SI" : "NO"}</td>
                            <td>{unidad.magnitud}</td>
                            <td className="fixed-column">
                                <div className="d-flex p-2">
                                    <span onClick={() => handleShow(2, unidad.codUnidad, unidad.desUnidad, unidad.usaDecimal, unidad.magnitud)} style={{ cursor: 'pointer' }}>
                                        <Pencil color="royalblue" size={24} title="Editar" />
                                    </span>

                                    <span onClick={() => confirmDeleteUnidad(unidad.codUnidad, unidad.desUnidad)} style={{ cursor: 'pointer' }}>
                                        <Trash color="DarkRed" size={24} title="Eliminar" />
                                    </span>


                                </div>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>

            <div className='d-flex justify-content-center'>
                <BasicPaginate totalPages={totalPages} handlePageClick={handlePageClick} />
            </div>

            <Modal
                id="modalUnidades"
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-primary bg-opacity-10'>

                    <Form>
                        <Row>
                            <Form.Group as={Col} controlId="codUnidad">
                                <Form.Label>Codigo</Form.Label>
                                <Form.Control type="text" className='w-25' id='codUnidad' value={codUnidad} onChange={(e) => setCodUnidad(e.target.value)} />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="desUnidad">
                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control type="text" id='desUnidad' value={desUnidad} onChange={(e) => setDesUnidad(e.target.value)} />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="usaDecimal">
                                <Form.Label>Usa decimal</Form.Label>

                                <Form.Check // prettier-ignore
                                    type="checkbox"
                                    id="usaDecimal"
                                    label="Usa decimal"
                                    checked={usaDecimal}
                                    onChange={handleChangeUsaDecimal}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="magnitud">
                                <Form.Label>Magnitud</Form.Label>
                                <Form.Control type="text" id='magnitud' value={magnitud} onChange={(e) => setMagnitud(e.target.value)} />
                            </Form.Group>
                        </Row>


                        <div className='text-center'>
                            <Button onClick={() => validar()} variant="success" className='btn btn-sm m-2 fw-bold'>
                                Guardar <BookmarkStarFill color="white" size={18} title="Save" />
                            </Button>
                        </div>

                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>

                </Modal.Footer>
            </Modal>

        </>
    )
}

export default IsUnidades
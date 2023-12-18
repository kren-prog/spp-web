import React, { useEffect, useState } from 'react'
import AgrupacionForm from '../../../Components/AgrupacionRecurso/AgrupacionForm';
import AgrupacionTable from '../../../Components/AgrupacionRecurso/AgrupacionTable';
import BasicModal from '../../../Components/BasicModal';
import { PlusCircle } from 'react-bootstrap-icons';
import { Button, Row, Col } from 'react-bootstrap';
import ItemsPerPage from 'Components/ItemsPerPage';
import SearchBar from 'Components/SearchBar';
import BasicPaginate from 'Components/BasicPaginate';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { fetchData, createData, updateData, deleteData } from 'App/api';

function AgrupacionRecurso() {

  const url = 'IsAgrupacionRecursos'; 
  const [agrupacionRecursos, setAgrupacionRecursos] = useState([]);

  const [operacion, setOperacion] = useState(1); // Para diferenciar si se hace update o post

  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [itemsPerPage, setItemsPerPage] = useState(10); // Valor predeterminado, ajusta según necesidades
  const [totalPages, setTotalPages] = useState(0);

  const [searchTerm, setSearchTerm] = useState('');

  const [loading, setLoading] = useState(true);

  const [selectedItem, setSelectedItem] = useState(null);

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getAgrupacionRecursos();
  }, [currentPage, itemsPerPage, searchTerm]);

  useEffect(() => {
    // Cuando cambia la página, actualiza los datos filtrados
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    if (agrupacionRecursos.length > 0) {

      const filteredResults = agrupacionRecursos.filter(item =>
        Object.values(item).some(value =>
          value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );

      setFilteredData(filteredResults.slice(startIndex, endIndex));
      setTotalPages(Math.ceil(filteredResults.length / itemsPerPage));
    }

  }, [agrupacionRecursos, currentPage, itemsPerPage, searchTerm]); // Actualiza los datos filtrados al cambiar la página o recibir nuevos datos

  const getAgrupacionRecursos = async () => {
    const result = await fetchData(url);
    // result es undefined cuando el status fue algo diferente de 200
    if (result !== undefined) {
      setAgrupacionRecursos(result);
      // Calcula la cantidad total de páginas en función de los datos y la cantidad de elementos por página
      setTotalPages(Math.ceil(result.length / itemsPerPage));

      // Asegura que la página actual no sea mayor que la última página
      const lastPage = Math.max(0, totalPages - 1);
      const actualPage = Math.min(currentPage, lastPage);
      setCurrentPage(actualPage);
    }
    setLoading(false);
  }

  const defaultValues = {
    "tipoRecurso": "",
    "agrupacion": "",
    "desAgrupacion": "",
    "rpm": null,
    "mts": null,
    "tiempoEstandar": 0,
    "eficiencia": 0,
    "produccion": 0,
    "cargaMinima": 0
  }

  // MODAL
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = (op, agrupacionRecurso) => {
    setOperacion(op);
    setShow(true);
    setSelectedItem(defaultValues);
    if (op === 1) {
      setIsEdit(false);
      setTitle("Registrar");
    } else if (op === 2) {
      setTitle("Editar");
      setSelectedItem(agrupacionRecurso);
      setIsEdit(true);
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
      getAgrupacionRecursos();
      handleClose();
    }
  }

  const confirmDeleteAgrupacionR = (tipo, cod, name) => {

    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: '¿Esta seguro?',
      icon: 'question',
      text: 'Se va a eliminar el tipo ' + name,
      showCancelButton: true, confirmButtonText: 'Si, eliminar', cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const newUrl = url + "/" + tipo.trim() + "/" + cod.trim();
        enviarSolicitud(3, newUrl);
      }
    });
  }

  const onSubmit = (data) => {

    if (operacion === 1) {
      enviarSolicitud(1, url, data);
    } else {
      const newUrl = url + "/" + data.tipoRecurso.trim() + "/" + data.agrupacion.trim();
      console.log(newUrl);
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

      <AgrupacionTable loading={loading} filteredData={filteredData} handleShow={handleShow} confirmDeleteUnidad={confirmDeleteAgrupacionR} />

      <div className='d-flex justify-content-center'>
        <BasicPaginate totalPages={totalPages} handlePageClick={handlePageClick} />
      </div>

      <BasicModal show={show} handleClose={handleClose} title={title}>
        <AgrupacionForm initialValues={selectedItem} onSubmit={onSubmit} isEdit={isEdit} />
      </BasicModal>

    </>
  )
}

export default AgrupacionRecurso
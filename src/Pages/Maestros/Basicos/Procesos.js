import React, { useEffect, useState } from 'react'
import { PlusCircle } from 'react-bootstrap-icons';
import { Button, Row, Col } from 'react-bootstrap';
import ProcesosForm from '../../../Components/Procesos/ProcesosForm';
import ProcesosTable from '../../../Components/Procesos/ProcesosTable';
import BasicModal from 'Components/BasicModal';
import ItemsPerPage from 'Components/ItemsPerPage';
import SearchBar from 'Components/SearchBar';
import BasicPaginate from 'Components/BasicPaginate';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { fetchData, createData, updateData, deleteData } from 'App/api';

function Procesos() {

  const url = 'IsProcesos';
  const [procesos, setProcesos] = useState([]);

  const [operacion, setOperacion] = useState(1); // Para diferenciar si se hace update o post

  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [itemsPerPage, setItemsPerPage] = useState(10); // Valor predeterminado, ajusta según necesidades
  const [totalPages, setTotalPages] = useState(0);

  const [searchTerm, setSearchTerm] = useState('');

  const [loading, setLoading] = useState(true);

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
      getProcesos();
  }, [currentPage, itemsPerPage, searchTerm]);

  useEffect(() => {
      // Cuando cambia la página, actualiza los datos filtrados
      const startIndex = currentPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      if (procesos.length > 0) {

          const filteredResults = procesos.filter(item =>
              Object.values(item).some(value =>
                  value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
              )
          );

          setFilteredData(filteredResults.slice(startIndex, endIndex));
          setTotalPages(Math.ceil(filteredResults.length / itemsPerPage));
      }

  }, [procesos, currentPage, itemsPerPage, searchTerm]); // Actualiza los datos filtrados al cambiar la página o recibir nuevos datos

  const getProcesos = async () => {
      const result = await fetchData(url);
      // result es undefined cuando el status fue algo diferente de 200
      if (result !== undefined) {
          setProcesos(result);
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
    codProceso: "",
    tipoNegocio: "",
    desProceso: "",
    desCorta: "",
    tipoFicha: "",
    abreviatura: "",
    interno: true,
    subproductoPorDefecto: true,
    porcentajePorDefecto: 0,
    porcentajeDelPorc2asPasadas: 0,
    controladoPorGantt: true,
    tipoMaterialProducido: 0,
    codUnidad: "",
    codUnidadAlterna: "",
    monoOperacion: true,
    usaMaquinas: true,
    origenEstandar: "",
    caracteristicaQueGenera: "",
    swEficiencia: 0,
    upedidoAUproceso: true,
    ideConversion: 0,
    tipoLeadTime: "",
    leadTime: 0,
    tiempoEntreReferencias: 0,
    codTipoGenerico: "",
    codTipoCadena: ""
  };
  // MODAL
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = (op, proceso) => {
      setOperacion(op);
      setShow(true);
      setSelectedItem(defaultValues);
      if (op === 1) {
          setTitle("Registrar");
      } else if (op === 2) {
          setTitle("Editar");
          setSelectedItem(proceso);
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
          getProcesos();
          handleClose();
      }
  }

  const confirmDeleteItem = (codUnidad, name) => {

      const MySwal = withReactContent(Swal);
      MySwal.fire({
          title: '¿Esta seguro?',
          icon: 'question',
          text: 'Se va a eliminar la proceso ' + name,
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

      <ProcesosTable loading={loading} filteredData={filteredData} handleShow={handleShow} confirmDeleteItem={confirmDeleteItem} />

      <div className='d-flex justify-content-center'>
        <BasicPaginate totalPages={totalPages} handlePageClick={handlePageClick} />
      </div>

      <BasicModal show={show} handleClose={handleClose} title={title}>
        <ProcesosForm initialValues={selectedItem} onSubmit={onSubmit} />
      </BasicModal>
      

    </>
  )
}

export default Procesos
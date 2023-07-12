import React from 'react'
import { Table, Row } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import SweetAlert from '../SweetAlert';
import { useForm } from '../../App/useForm';
import BasicModal from '../BasicModal';
import BasicPaginate from '../BasicPaginate';
import ProcesosForm from './ProcesosForm';
import SearchBar from '../SearchBar';
import ItemsPerPage from '../ItemsPerPage';

function ProcesosTable() {

  const { show, handleClose, handleShow, searchTerm, handleSearch, numberOfRows, itemsPerPage, handleChangeItems, alertResponse, handleAlertResponse } = useForm();
  
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(50 / itemsPerPage); // data.length

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const data = [
    { code: 1, description: 'Prendas', razon: 1, nit: 'M2', representante: 1, direccion1: "abc", direccion2: "def", telefono1: "8884422", telefono2: "3145650545", fax: 57, pais: "colombia", departamento: "Antioquia", municipio: "Rio negro", url: "", email: "" },
    { code: 2, description: 'Dias', razon: 1440, nit: 'Minuto', representante: 0, direccion1: "abc", direccion2: "def", telefono1: "8884422", telefono2: "3145650545", fax: 57, pais: "colombia", departamento: "Antioquia", municipio: "Rio negro", url: "", email: "" },
    { code: 3, description: 'Horas', razon: 60, nit: 'Prendas', representante: 1, direccion1: "abc", direccion2: "def", telefono1: "8884422", telefono2: "3145650545", fax: 57, pais: "colombia", departamento: "Antioquia", municipio: "Rio negro", url: "", email: "" },
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
            <th>Codigo</th>
            <th>Tipo Negocio</th>
            <th>Descripcion</th>
            <th>Des corta</th>
            <th>Tipo ficha</th>
            <th>Abreviatura</th>
            <th>Interno</th>
            <th>Subproducto por defecto</th>
            <th>Porcentaje por defecto</th>
            <th>Porcentaje del Porc 2as pasadas</th>
            <th>Controlado por Gantt</th>
            <th>Tipo material producido</th>
            <th>Cod unidad</th>
            <th>Unidad Alterna</th>
            <th>Mono operacion</th>
            <th>Usa maquinas</th>
            <th>Origen estandar</th>
            <th>Caracteristica que genera</th>
            <th>Unid pedido a Unid</th>
            <th>Ide Conversion</th>
            <th>Tipo lead time</th>
            <th>Lead time</th>
            <th>Tiempo Entre Ref</th>
            <th className="fixed-column">Acciones</th>
          </tr>
        </thead>
        <tbody>

          {currentData.map((item) => (
            <tr key={item.code}>
              <td>{item.code}</td>
              <td>{item.description}</td>
              <td>{item.departamento}</td>
              <td>{item.municipio}</td>
              <td>{item.razon}</td>
              <td>{item.nit}</td>
              <td>{item.representante}</td>
              <td>{item.direccion1}</td>
              <td>{item.direccion2}</td>
              <td>{item.telefono1}</td>
              <td>{item.telefono2}</td>
              <td>{item.fax}</td>
              <td>{item.url}</td>
              <td>{item.url}</td>
              <td>{item.url}</td>
              <td>{item.url}</td>
              <td>{item.url}</td>
              <td>{item.url}</td>
              <td>{item.url}</td>
              <td>{item.email}</td>
              <td>{item.email}</td>
              <td>{item.email}</td>
              <td>{item.email}</td>
              <td className="fixed-column">
                <div className="d-flex p-2">
                  <span onClick={handleShow} style={{ cursor: 'pointer' }}>
                    <Pencil color="royalblue" size={24} title="Editar" />
                  </span>

                  {
                    show && (
                      <BasicModal handleClose={handleClose} title={"Editar"}>
                        <ProcesosForm />
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

export default ProcesosTable
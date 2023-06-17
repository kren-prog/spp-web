import React from 'react'
import { Table } from 'react-bootstrap';

function Operaciones() {

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(50 / itemsPerPage); // data.length

  const data = [
    { code: 'CON', description: 'Confeccion', observacion: 'Confeccion' },
    { code: 'EMP', description: 'Empaque', observacion: 'Empaque'},
];

const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentData = data.slice(startIndex, endIndex);

  return (
    <Table striped bordered hover responsive size="sm">
      <thead>
        <tr>
          <th>Tipo Recurso</th>
          <th>Proceso</th>
          <th>Observacion</th>
          <th className="fixed-column">Acciones</th>
        </tr>
      </thead>
      <tbody>

        {currentData.map((item) => (
          <tr key={item.code}>
            <td>{item.code}</td>
            <td>{item.description}</td>
            <td>{item.observacion}</td>
            <td className="fixed-column">
              <div className="d-flex p-2">
                {/* <a href='/'><Pencil color="royalblue" size={24} title="Editar" /></a> */}
                {/* <SweetAlert onAlertResponse={handleAlertResponse}
                                        title="Esta seguro?"
                                        text="Se eliminara el item."
                                        icon="warning"
                                        typebtn="delete"
                                    />
                                    <p> {alertResponse}</p> */}
              </div>
            </td>
          </tr>
        ))}

      </tbody>
    </Table>
  )
}

export default Operaciones
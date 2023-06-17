import React from 'react'
import { Table } from 'react-bootstrap';

function ConversionUnidades() {

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(50 / itemsPerPage); // data.length

  const data = [
    { code: 1, origen: 'Prendas', factor: 1, destino: 'M2', factorSql: 1 },
    { code: 2, origen: 'Dias', factor: 1440, destino: 'Minuto', factorSql: 0 },
    { code: 3, origen: 'Horas', factor: 60, destino: 'Prendas', factorSql: 1 },
];

const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentData = data.slice(startIndex, endIndex);

  return (
    <Table striped bordered hover responsive size="sm">
      <thead>
        <tr>
          <th>Unidad origen</th>
          <th>Factor</th>
          <th>Unidad destino</th>
          <th>Usa SQL factor</th>
          <th className="fixed-column">Acciones</th>
        </tr>
      </thead>
      <tbody>

        {currentData.map((item) => (
          <tr key={item.code}>
            <td>{item.code}</td>
            <td>{item.origen}</td>
            <td>{item.factor}</td>
            <td>{item.destino}</td>
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

export default ConversionUnidades
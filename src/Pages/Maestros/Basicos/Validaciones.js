import React from 'react'
import { Table, Form, Row, Col } from 'react-bootstrap';

function Validaciones() {
  // Operacion proceso por referencia
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(50 / itemsPerPage); // data.length

  const data = [
    { code: 1, tipo: 'Prendas' },
    { code: 2, tipo: 'Dias' },
    { code: 3, tipo: 'Horas' },
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  return (
    <>
      <Form>

        <Row>
          <Form.Group as={Col} controlId="codigo">
            <Form.Label className='fw-bold'>Version</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Descripciones</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

      </Form>


      <Table striped bordered hover responsive size="sm" className='mt-3'>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descripcion</th>
            <th>Secuencia</th>
            <th>Activo</th>
            <th>Item Alterno</th>
            <th>Usuario Autoriza</th>
            <th>Dias aprobacion</th>
            <th>Rpm</th>
            <th>Mts</th>
            <th>Produccion</th>
            <th>Tiempo estandar</th>
            <th>Eficiencia</th>
            <th className="fixed-column">Acciones</th>
          </tr>
        </thead>
        <tbody>

          {currentData.map((item) => (
            <tr key={item.code}>
              <td>{item.code}</td>
              <td>{item.tipo}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td className="fixed-column">
                <div className="d-flex p-2">
                  {/* <a href='/'><Pencil color="royalblue" size={24} title="Editar" /></a> */}
                  {/* <SweetAlert onAlertResponse={handleAlertResponse}
                                        title="Esta seguro?"
                                        text="Se eliminara el item."
                                        icon="warning"
                                        typebtn="delete"
                                    />
                                    */}
                </div>
              </td>
            </tr>
          ))}

        </tbody>
      </Table>

    </>
  )
}

export default Validaciones
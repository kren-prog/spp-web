import React from 'react'
import { Table, Form, Row, Col } from 'react-bootstrap';

function Clientes() {
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
            <Form.Label className='fw-bold'>Cod cliente</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Estado</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Tipo cliente</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Nombre cliente</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Email</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Razon social</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Contacto</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Rep legal</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Nit</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
            <h5>Agente</h5>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Retenedor</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Regimen</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Direccion</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>
        
        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Pais</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Departamento</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Municipio</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Telefono 1</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Telefono 2</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

      </Form>


      <Table striped bordered hover responsive size="sm" className='mt-3'>
        <thead>
          <tr>
            <th>Cod sucursal</th>
            <th>Nombre sucursal</th>
            <th>Direccion</th>
            <th>Telefono 1</th>
            <th>Telefono 2</th>
            <th>Pais</th>
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
                                    <p> {alertResponse}</p> */}
                </div>
              </td>
            </tr>
          ))}

        </tbody>
      </Table>

    </>
  )
}

export default Clientes
import React from 'react'
import { Table, Form, Row, Col } from 'react-bootstrap';

function AgrupacionRecurso() {

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(50 / itemsPerPage); // data.length

  const data = [
    { code: 1, tipo: 'Prendas', agrupacion: 1, description: 'M2', rpm: 1, mts: "abc", eficiencia:"def", produccion:"8884422", minima:"3145650545", tiempo: 57 },
    { code: 2, tipo: 'Dias', agrupacion: 1440, description: 'Minuto', rpm: 0, mts: "abc", eficiencia:"def", produccion:"8884422", minima:"3145650545", tiempo: 57 },
    { code: 3, tipo: 'Horas', agrupacion: 60, description: 'Prendas', rpm: 1, mts: "abc", eficiencia:"def", produccion:"8884422", minima:"3145650545", tiempo: 57 },
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  return (
    <>
      <Form>

        <Row>
          <Form.Group as={Col} controlId="codigo">
            <Form.Label className='fw-bold'>Tipo recurso</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>

        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Agrupacion</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Descripcion</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Rpm</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Mts</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Carga minima</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Produccion </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Eficiencia</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Tiemmpo estandar</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

      </Form>


      <Table striped bordered hover responsive size="sm" className='mt-3'>
        <thead>
          <tr>
            <th>Tipo recurso</th>
            <th>Agrupacion</th>
            <th>Descripcion</th>
            <th>Rpm</th>
            <th>Mts</th>
            <th>Eficiencia</th>
            <th>Produccion</th>
            <th>Carga minima</th>
            <th>Tiempo estandar</th>
            <th className="fixed-column">Acciones</th>
          </tr>
        </thead>
        <tbody>

          {currentData.map((item) => (
            <tr key={item.code}>
              <td>{item.tipo}</td>
              <td>{item.agrupacion}</td>
              <td>{item.description}</td>
              <td>{item.rpm}</td>
              <td>{item.mts}</td>
              <td>{item.eficiencia}</td>
              <td>{item.produccion}</td>
              <td>{item.minima}</td>
              <td>{item.tiempo}</td>
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

export default AgrupacionRecurso
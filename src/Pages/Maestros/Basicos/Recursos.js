import React from 'react'
import { Table, Form, Row, Col } from 'react-bootstrap';

function Recursos() {

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(50 / itemsPerPage); // data.length

  const data = [
    { code: 1, tipo: 'Prendas', agrupacion: 35, estado: "A", fabrica:"2", planta:251, centro:2, subcentro: 2, description: 'M2', marca: 1, modelo: "abc", serie:"def", anio:"8884422", salidas:"3145650545", kilovatio: 57, agua: 1, gas: 6, vapor: 7, n1: 1, n2: 3, n3: 2, c1:3, c2:5, c3: 7, maquina: 2, bruto: 5, neto: 8, produccion: 4, capacidad:7, tiempo: 6},
    { code: 2, tipo: 'Dias', agrupacion: 14, estado: "A", fabrica:"2", planta:251, centro:2, subcentro: 2, description: 'Minuto', marca: 0, modelo: "abc", serie:"def", anio:"8884422", salidas:"3145650545", kilovatio: 57, agua: 1, gas: 6, vapor: 7, n1: 1, n2: 3, n3: 2, c1:3, c2:5, c3: 7, maquina: 2, bruto: 5, neto: 8, produccion: 4, capacidad:7, tiempo: 6},
    { code: 3, tipo: 'Horas', agrupacion: 60, estado: "A", fabrica:"2", planta:251, centro:2, subcentro: 2, description: 'Prendas', marca: 1, modelo: "abc", serie:"def", anio:"8884422", salidas:"3145650545", kilovatio: 57, agua: 1, gas: 6, vapor: 7, n1: 1, n2: 3, n3: 2, c1:3, c2:5, c3: 7, maquina: 2, bruto: 5, neto: 8, produccion: 4, capacidad:7, tiempo: 6},
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  return (
    <>
      <Form>

        <Row>
          <h5>Informacion general</h5>
          <Form.Group as={Col} controlId="codigo">
            <Form.Label className='fw-bold'>Tipo recurso</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>

          <Form.Group as={Col} controlId="codigo">
            <Form.Label className='fw-bold'>Codigo</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Agrupacion</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>

          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Estado</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Fabrica</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Planta</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Centro</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Subcentro</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Descripcion </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Marca </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Modelo </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Serie</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Salidas </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Año </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Numero </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Peso bruto </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Peso neto </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <h5>EVAG (Energia, Vapor, Agua, Gas )</h5>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Kilovatio </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Vapor libras </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Agua M3 </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Gas M3 </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <h5>Atributos</h5>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Atributo N1 </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Atributo N2 </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Atributo N3 </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        
        </Row>

        <Row>
          <h5>Capacidad Produccion</h5>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Atributo C1 </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Atributo C2 </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Atributo C3 </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Capacidad </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Unidad Cap </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Unidad Tiempo </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

      </Form >


      <Table striped bordered hover responsive size="sm" className='mt-3'>
        <thead>
          <tr>
            <th>Tipo recurso</th>
            <th>Codigo</th>
            <th>Agrupacion</th>
            <th>Estado</th>
            <th>Fabrica</th>
            <th>Planta</th>
            <th>Centro</th>
            <th>Subcentro</th>
            <th>Descripcion</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Serie</th>
            <th>Anio</th>
            <th>Salidas</th>
            <th>Kilovatio</th>
            <th>Agua M3</th>
            <th>Vapor Libras</th>
            <th>Atributo N1</th>
            <th>Atributo N2</th>
            <th>Atributo N3</th>
            <th>Atributo N4</th>
            <th>Atributo C1</th>
            <th>Atributo C2</th>
            <th>Atributo C3</th>
            <th>Atributo C4</th>
            <th>Numero maquina</th>
            <th>Peso bruto</th>
            <th>Peso neto</th>
            <th>Capacidad produccion</th>
            <th>Unidad capacidad</th>
            <th>Unidad tiempo produccion</th>

            <th className="fixed-column">Acciones</th>
          </tr>
        </thead>
        <tbody>

          {currentData.map((item) => (
            <tr key={item.code}>
              <td>{item.tipo}</td>
              <td>{item.code}</td>
              <td>{item.agrupacion}</td>
              <td>{item.estado}</td>
              <td>{item.fabrica}</td>
              <td>{item.planta}</td>
              <td>{item.centro}</td>
              <td>{item.subcentro}</td>
              <td>{item.description}</td>
              <td>{item.marca}</td>
              <td>{item.modelo}</td>
              <td>{item.serie}</td>
              <td>{item.anio}</td>
              <td>{item.salidas}</td>
              <td>{item.kilovatio}</td>
              <td>{item.agua}</td>
              <td>{item.gas}</td>
              <td>{item.vapor}</td>
              <td>{item.n1}</td>
              <td>{item.n2}</td>
              <td>{item.n3}</td>
              <td>{item.c1}</td>
              <td>{item.c2}</td>
              <td>{item.c3}</td>
              <td>{item.numero}</td>
              <td>{item.maquina}</td>
              <td>{item.bruto}</td>
              <td>{item.neto}</td>
              <td>{item.produccion}</td>
              <td>{item.capacidad}</td>
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

export default Recursos
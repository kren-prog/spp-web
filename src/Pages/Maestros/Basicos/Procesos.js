import React from 'react'
import { Table, Form, Row, Col } from 'react-bootstrap';

function Procesos() {

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(50 / itemsPerPage); // data.length

  const data = [
    { code: 1, description: 'Prendas', razon: 1, nit: 'M2', representante: 1, direccion1: "abc", direccion2: "def", telefono1: "8884422", telefono2: "3145650545", fax: 57, pais: "colombia", departamento: "Antioquia", municipio: "Rio negro", url: "", email: "" },
    { code: 2, description: 'Dias', razon: 1440, nit: 'Minuto', representante: 0, direccion1: "abc", direccion2: "def", telefono1: "8884422", telefono2: "3145650545", fax: 57, pais: "colombia", departamento: "Antioquia", municipio: "Rio negro", url: "", email: "" },
    { code: 3, description: 'Horas', razon: 60, nit: 'Prendas', representante: 1, direccion1: "abc", direccion2: "def", telefono1: "8884422", telefono2: "3145650545", fax: 57, pais: "colombia", departamento: "Antioquia", municipio: "Rio negro", url: "", email: "" },
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  return (
    <>
      <Form>

        <Row>
          <Form.Group as={Col} controlId="codigo">
            <Form.Label className='fw-bold'>Codigo</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Tipo negocio</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group><Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Tipo ficha</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col}>
            <Form.Check // prettier-ignore
              type="checkbox"
              id=""
              label="Interno" checked
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Check // prettier-ignore
              type="checkbox"
              id=""
              label="Mono Operacion"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Check // prettier-ignore
              type="checkbox"
              id=""
              label="Usa maquinas"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Check // prettier-ignore
              type="checkbox"
              id=""
              label="Controlado por Gantt"
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Cod unidad</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Unidad alterna</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Tipo material producido</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Descripcion</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Descripcion corta</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Porcentaje por defecto</Form.Label>
            <Form.Control type="number" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Porc Del Por 2as Pasadas</Form.Label>
            <Form.Control type="number" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Origen estandar</Form.Label>
            <Form.Control type="number" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Caracteristicas que genera</Form.Label>
            <Form.Control type="number" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Subproducto por defecto</Form.Label>
            <Form.Control type="number" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Tipo eficiencia</Form.Label>
            <Form.Control type="number" className='' />
          </Form.Group>
        </Row>

        <Row>

          <Form.Check // prettier-ignore
            type="checkbox"
            id=""
            label="U pedido a U Proceso"
          />
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Conversion</Form.Label>
            <Form.Control type="number" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Tipo LT</Form.Label>
            <Form.Control type="number" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Lead Time</Form.Label>
            <Form.Control type="number" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>T entre Ref</Form.Label>
            <Form.Control type="number" className='' />
          </Form.Group>
        </Row>

      </Form >


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
              <td>{item.email}</td>
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

export default Procesos
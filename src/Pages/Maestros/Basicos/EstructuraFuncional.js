import React from 'react'
import { Table, Form, Row, Col, Tab, Tabs } from 'react-bootstrap';

function EstructuraFuncional() {

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

      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="fabrica" title="Fabrica">
          Tab content for Home
        </Tab>
        <Tab eventKey="planta" title="Planta">
          Tab content for Profile
        </Tab>
        <Tab eventKey="centro" title="Centro">
          Tab content for Loooonger Tab
        </Tab>
        <Tab eventKey="subcentro" title="Subcentro">
          Tab content for Loooonger Tab
        </Tab>
        <Tab eventKey="negocio" title="Negocio">
          Tab content for Loooonger Tab
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          Tab content for Contact
        </Tab>
      </Tabs>


      <Form>

        <Row>
          <Form.Group as={Col} controlId="codigo">
            <Form.Label className='fw-bold'>Codigo</Form.Label>
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
            <Form.Label className='fw-bold'>Razon social</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>NIT</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Representante legal</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Direccion (1) </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Direccion (2)</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Direccion (3)</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Telefono (1) </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Telefono (2) </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Fax</Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>


        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Pais </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Departamento </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Municipio </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Url </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
          <Form.Group as={Col} controlId="descripcion">
            <Form.Label className='fw-bold'>Email </Form.Label>
            <Form.Control type="text" className='' />
          </Form.Group>
        </Row>

      </Form>


      <Table striped bordered hover responsive size="sm" className='mt-3'>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Descripcion</th>
            <th>Departamento</th>
            <th>Municipio</th>
            <th>Razon social</th>
            <th>Nit</th>
            <th>Representante legal</th>
            <th>Direccion (1)</th>
            <th>Direccion (2)</th>
            <th>Telefono (1)</th>
            <th>Telefono (2)</th>
            <th>Fax</th>
            <th>Url</th>
            <th>Email</th>
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

export default EstructuraFuncional
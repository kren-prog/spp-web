import { BookmarkStarFill } from 'react-bootstrap-icons';
import { Form, Row, Col, Button, Tabs, Tab } from 'react-bootstrap';

function ReferenciaForm() {
  
  return (
    <Tabs
      defaultActiveKey="reference"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="reference" title="Referencia">
        <Form>
          <Row>
            <Form.Group as={Col} controlId="ref">
              <Form.Label>Referencia</Form.Label>
              <Form.Control type="number" className='w-25' />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="codigo">
              <Form.Label>Código</Form.Label>
              <Form.Control type="number" className='w-25' />
            </Form.Group>
            <Form.Group as={Col} controlId="tipoMaterial">
              <Form.Label>Tipo Prenda</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="unit">
              <Form.Label>Unidad</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="family">
              <Form.Label>Familia</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="design">
              <Form.Label>Diseño</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="flujo">
              <Form.Label>Flujo</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="mix">
              <Form.Label>Mezcla</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="group">
              <Form.Label>Grupo</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="subgroup">
              <Form.Label>Subgrupo</Form.Label>
              <Form.Control as="input" type='number' />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="description">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group as={Col} controlId="shortDesc">
              <Form.Label>Desc. Corta</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>

          <div className='text-center'>
            <Button variant="success" className='btn btn-sm m-2 fw-bold'>
              Guardar <BookmarkStarFill color="white" size={18} title="Save" />
            </Button>
          </div>

        </Form>
      </Tab>
      <Tab eventKey="att" title="Atributos">
        <Form>
          <Row>
            <Form.Group as={Col} controlId="n1">
              <Form.Label>Atributo N1</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="c1">
              <Form.Label>Atributo C1</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="n1">
              <Form.Label>Atributo N2</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="c1">
              <Form.Label>Atributo C2</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="n1">
              <Form.Label>Atributo N3</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="c1">
              <Form.Label>Atributo C3</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>
        </Form>
      </Tab>
      <Tab eventKey="class" title="Clasificación Opcional">
        <Form>
          <Row>
            <Form.Group as={Col} controlId="n1">
              <Form.Label>LINEA</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="c1">
              <Form.Label>CUENTO</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="n1">
              <Form.Label>Clasif 3</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="c1">
              <Form.Label>Clasif 4</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="n1">
              <Form.Label>Clasif 5</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>

          <div className='text-center'>
            <Button variant="success" className='btn btn-sm m-2 fw-bold'>
              Guardar <BookmarkStarFill color="white" size={18} title="Save" />
            </Button>
          </div>
        </Form>
      </Tab>
      <Tab eventKey="info" title="Información adicional" disabled>
      </Tab>
    </Tabs>
  );
}

export default ReferenciaForm;
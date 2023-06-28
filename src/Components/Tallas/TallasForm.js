import { BookmarkStarFill } from 'react-bootstrap-icons';
import { Form, Row, Col, Button, Tabs, Tab } from 'react-bootstrap';

function TallasForm() {
  
  return (
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <Form>
          <Row>
            <Form.Group as={Col} controlId="codigo">
              <Form.Label>Código</Form.Label>
              <Form.Control type="number" className='w-25' />
            </Form.Group>
            <Form.Group as={Col} controlId="tipoMaterial">
              <Form.Label>Tipo Prenda</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>
          <Row>
          <Form.Group as={Col} controlId="description">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group as={Col} controlId="tipoMaterial">
              <Form.Label>Género</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="shortDesc">
              <Form.Label>Desc. Corta</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="description">
              <Form.Label>Unidad</Form.Label>
              <Form.Control as="input" type='number' />
            </Form.Group>
          </Row>

          <div className='text-center'>
            <Button variant="success" className='btn btn-sm m-2 fw-bold'>
              Guardar <BookmarkStarFill color="white" size={18} title="Save" />
            </Button>
          </div>

        </Form>
      </Tab>
      <Tab eventKey="Prendas" title="Profile">
        <Form>
          <Row>
            <Form.Group as={Col} controlId="cuello">
              <Form.Label>Cuello</Form.Label>
              <Form.Control type="number" className='w-25' />
            </Form.Group>
            <Form.Group as={Col} controlId="cadera">
              <Form.Label>Cadera</Form.Label>
              <Form.Control type="number" className='w-25' />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="pecho">
              <Form.Label>Pecho</Form.Label>
              <Form.Control type="number" className='w-25' />
            </Form.Group>
            <Form.Group as={Col} controlId="manga">
              <Form.Label>Manga</Form.Label>
              <Form.Control type="number" className='w-25' />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="cintura">
              <Form.Label>Cintura</Form.Label>
              <Form.Control type="number" className='w-25' />
            </Form.Group>
            <Form.Group as={Col} controlId="pernera">
              <Form.Label>Pernera</Form.Label>
              <Form.Control type="number" className='w-25' />
            </Form.Group>
          </Row>
        </Form>
      </Tab>
      <Tab eventKey="contact" title="Accesorios(Correas, Zapatos, Guantes, etc.)">
        <Form>
          <Row>
            <Form.Group as={Col} controlId="largo">
              <Form.Label>Largo</Form.Label>
              <Form.Control type="number" className='w-25' />
            </Form.Group>
            <Form.Group as={Col} controlId="diámetro">
              <Form.Label>Diámetro</Form.Label>
              <Form.Control type="number" className='w-25' />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="ancho">
              <Form.Label>Ancho</Form.Label>
              <Form.Control type="number" className='w-25' />
            </Form.Group>
          </Row>

          <div className='text-center'>
            <Button variant="success" className='btn btn-sm m-2 fw-bold'>
              Guardar <BookmarkStarFill color="white" size={18} title="Save" />
            </Button>
          </div>

        </Form>
      </Tab>
    </Tabs>
  );
}

export default TallasForm;
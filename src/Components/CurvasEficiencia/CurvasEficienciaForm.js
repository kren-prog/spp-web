import { BookmarkStarFill } from 'react-bootstrap-icons';
import { Form, Row, Col, Button } from 'react-bootstrap';

function CurvasEficienciaForm() {
  
  return (
    <Form>
      <Row>
        <Form.Group as={Col} controlId="codigo">
          <Form.Label>Codigo</Form.Label>
          <Form.Control type="number" className='w-25' />
        </Form.Group>
        <Form.Group as={Col} controlId="description">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="a">
          <Form.Label>A</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group as={Col} controlId="b">
          <Form.Label>B</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group as={Col} controlId="diaEstabilidad">
          <Form.Label>Día Estabilidad</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="planType">
          <Form.Label>Tipo Planeador</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="location">
          <Form.Label>Ubicación</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="recurso">
          <Form.Label>Recurso</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="aRecurso">
          <Form.Label>Agrupación Recurso</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="referencia">
          <Form.Label>Referencia</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="aReferencia">
          <Form.Label>Agrupación Referencia</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Row>

      <div className='text-center'>
        <Button variant="success" className='btn btn-sm m-2 fw-bold'>
          Guardar <BookmarkStarFill color="white" size={18} title="Save" />
        </Button>
      </div>

    </Form>
  );
}

export default CurvasEficienciaForm;
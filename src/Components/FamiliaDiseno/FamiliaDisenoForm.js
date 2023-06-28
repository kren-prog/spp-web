import { BookmarkStarFill } from 'react-bootstrap-icons';
import { Form, Row, Col, Button } from 'react-bootstrap';

function FamiliaDisenoForm() {
  
  return (
    <Form>
      <Row>
        <Form.Group as={Col} controlId="codigo">
          <Form.Label>Familia</Form.Label>
          <Form.Control type="number" className='w-25' />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="tipoMaterial">
          <Form.Label>Tipo Material</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="description">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Row>
      <Row>
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
  );
}

export default FamiliaDisenoForm;
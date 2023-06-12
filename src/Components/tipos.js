import { BookmarkStarFill } from 'react-bootstrap-icons';
import { Form, Row, Col, Button } from 'react-bootstrap';
function PlaintextExample() {
  return (
    <Form>
      <Row>
        <Form.Group as={Col} controlId="codigo">
          <Form.Label>Codigo</Form.Label>
          <Form.Control type="number" className='w-25' />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="tipoCadena">
          <Form.Label>Tipo cadena</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="tipoEntero">
          <Form.Label>Tipo entero</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group as={Col} controlId="secuencia">
          <Form.Label>Secuencia</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="an1">
          <Form.Label>Atributo N1</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group as={Col} controlId="an2">
          <Form.Label>Atributo N2</Form.Label>
          <Form.Control type="number" />
        </Form.Group> <Form.Group as={Col} controlId="an3">
          <Form.Label>Atributo N3</Form.Label>
          <Form.Control type="number" />
        </Form.Group> <Form.Group as={Col} controlId="an4">
          <Form.Label>Atributo N4</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="ac1">
          <Form.Label>Atributo C1</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="ac2">
          <Form.Label>Atributo C2</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="ac3">
          <Form.Label>Atributo C3</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="ac4">
          <Form.Label>Atributo C4</Form.Label>
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

export default PlaintextExample;
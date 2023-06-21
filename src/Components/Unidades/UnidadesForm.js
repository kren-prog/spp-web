import { Form, Row, Col, Button } from 'react-bootstrap';
import { BookmarkStarFill } from 'react-bootstrap-icons';

function UnidadesForm() {
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
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
    </Row>
    <Row>
      <Form.Group as={Col} controlId="an1">
        <Form.Label>Usa decimal</Form.Label>

            <Form.Check // prettier-ignore
              type="checkbox"
              id=""
              label="Usa decimal" 
              checked
            />
      </Form.Group>
      <Form.Group as={Col} controlId="an2">
        <Form.Label>Magnitud</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
    </Row>
    

    <div className='text-center'>
      <Button variant="success" className='btn btn-sm m-2 fw-bold'>
        Guardar <BookmarkStarFill color="white" size={18} title="Save" />
      </Button>
    </div>

  </Form>
  )
}

export default UnidadesForm
import { Form, Row, Col, Button } from 'react-bootstrap';
import { BookmarkStarFill } from 'react-bootstrap-icons';

function ConversionForm() {
  return (
    <Form>
    <Row>

      <Form.Group as={Col} controlId="codigo">
        <Form.Label>Unidad origen</Form.Label>
        <Form.Control type="number" className='w-25' />
      </Form.Group>

    </Row>
    <Row>

      <Form.Group as={Col} controlId="tipoCadena">
        <Form.Label>Factor</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

    </Row>
    <Row>

      <Form.Group as={Col} controlId="an1">
        <Form.Label>Unidad destino</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group as={Col} controlId="an2">
        <Form.Label>Usa SQL factor</Form.Label>
        <Form.Check // prettier-ignore
              type="checkbox"
              id=""
              label="Usa SQL factor" 
              checked
            />
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

export default ConversionForm
import { BookmarkStarFill } from 'react-bootstrap-icons';
import { Form, Row, Col, Button } from 'react-bootstrap';

function RProcesoForm() {
  return (
    <Form>
      <Row>
        <Form.Group as={Col} controlId="tipoc">
          <Form.Label className='fw-bold'>Tipo Recurso</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1" selected>Artes</option>
            <option value="2">Confeccion</option>
            <option value="3">Corte</option>
            <option value="4">Empaque</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="tipoc">
          <Form.Label className='fw-bold'>Proceso</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1" selected>Confeccion</option>
            <option value="2">Empaque</option>
          </Form.Select>
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

export default RProcesoForm
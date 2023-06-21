import { BookmarkStarFill } from 'react-bootstrap-icons';
import { Form, Row, Col, Button } from 'react-bootstrap';

function OperacionesForm() {
    return (
        <Form>
            <Row>
                <Form.Group as={Col} controlId="tipoCadena">
                    <Form.Label>Codigo Operacion</Form.Label>
                    <Form.Control type="text" className='w-25'/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="tipoCadena">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="tipoCadena">
                    <Form.Label>Observacion</Form.Label>
                    <Form.Control type="text" />
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

export default OperacionesForm
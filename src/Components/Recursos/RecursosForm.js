import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { BookmarkStarFill } from 'react-bootstrap-icons';

function RecursosForm() {
    return (
        <Form>

            <Row>
                <h5>Informacion general</h5>
                <Form.Group as={Col} controlId="codigo">
                    <Form.Label className='fw-bold'>Tipo recurso</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>

                <Form.Group as={Col} controlId="codigo">
                    <Form.Label className='fw-bold'>Codigo</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Agrupacion</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>

                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Estado</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Fabrica</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Planta</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Centro</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Subcentro</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Descripcion </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Marca </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Modelo </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Serie</Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Salidas </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Año </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Numero </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Peso bruto </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Peso neto </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
            </Row>

            <Row>
                <h5>EVAG (Energia, Vapor, Agua, Gas )</h5>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Kilovatio </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Vapor libras </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Agua M3 </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Gas M3 </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
            </Row>

            <Row>
                <h5>Atributos</h5>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Atributo N1 </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Atributo N2 </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Atributo N3 </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>

            </Row>

            <Row>
                <h5>Capacidad Produccion</h5>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Atributo C1 </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Atributo C2 </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Atributo C3 </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>

            </Row>

            <Row>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Capacidad </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Unidad Cap </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label className='fw-bold'>Unidad Tiempo </Form.Label>
                    <Form.Control type="text" className='' />
                </Form.Group>
            </Row>
            <div className='text-center'>
                <Button variant="success" className='btn btn-sm m-2 fw-bold'>
                    Guardar <BookmarkStarFill color="white" size={18} title="Save" />
                </Button>
            </div>
        </Form >
    )
}

export default RecursosForm
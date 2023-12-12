import React from 'react'
import { Form, Col, InputGroup } from 'react-bootstrap';

function ItemsPerPage({handleChangeItems, numberOfRows}) {
    return (
        <Form.Group controlId="tipoc" as={Col} sm={5} md={4} lg={2} xl={2}>
            <InputGroup size="sm" className="mb-2">

                <InputGroup.Text className='fw-bold'>Cant. mostrar</InputGroup.Text>
                <Form.Select aria-label="Default select example" value={numberOfRows} onChange={handleChangeItems}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                </Form.Select>
            </InputGroup>
        </Form.Group>
    )
}

export default ItemsPerPage
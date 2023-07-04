import React from 'react'
import { Form, Col, InputGroup } from 'react-bootstrap';

function SearchBar({searchTerm, handleSearch}) {
    return (
        <Form.Group as={Col} md={8} lg={6} xl={6}>
            <InputGroup size="sm" className="mb-2">
                {/* <InputGroup.Text className='fw-bold'>Buscar</InputGroup.Text> */}
                <Form.Control
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </InputGroup>
        </Form.Group>
    )
}

export default SearchBar
import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
// pertenece a maestros configuracion Colores programador
function FormColor({iniColor}) {
// se pueden adicionar colores ? 
    const [color, setColor] = React.useState(iniColor);
    const [disabled, setDisabled] = React.useState(true);
    const [variant, setVariant] = React.useState('success');
    const [btntxt, setBtntxt] = React.useState('Editar');

    const handleColorChange = (event) => {
        setColor(event.target.value); // Actualiza el estado con el nuevo valor del color
    };

    const handleEditClick = () => {
        setDisabled(!disabled);
        variant === 'success' ? setVariant('secondary') : setVariant('success');
        btntxt === 'Editar' ? setBtntxt('Cancel') : setBtntxt('Editar');
        setColor(iniColor);
    }; 

    return (

        <Form>

            <Row>
                <Form.Group as={Col}>
                    <Form.Label className='fw-bold'>Descripción</Form.Label>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label className='fw-bold'>Color</Form.Label>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label className='fw-bold'>Acciones</Form.Label>
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Control type="text" className='' value={"Magenta"} />
                </Form.Group>

                <Form.Group as={Col} controlId="color">
                    <Form.Control type="color" className='w-100' value={color} onChange={handleColorChange} disabled={disabled} />
                </Form.Group>

                <Form.Group as={Col}>
                    <Button variant={variant} className='btn' onClick={handleEditClick}>
                        {btntxt}
                    </Button>
            
                    <Button variant='primary' hidden={disabled} className='ms-2'>
                        Guardar
                    </Button>
                </Form.Group>

            </Row>

        </Form>

    )
}

export default FormColor
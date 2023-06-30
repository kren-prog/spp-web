import React from 'react'
import ConsecutivoTable from '../../../Components/ConfiguracionConsecutivo/ConsecutivoTable';
import BasicModal from '../../../Components/BasicModal';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from '../../../App/useForm';
import { PlusCircle } from 'react-bootstrap-icons';
import ConsecutivoForm from '../../../Components/ConfiguracionConsecutivo/ConsecutivoForm';

function ConfiguracionConsecutivo() {

    const { show, handleClose, handleShow } = useForm();

    return (
        <>
            <Container>
                <Button variant="warning" className='btn btn-sm m-2 fw-bold text-white' onClick={handleShow}>
                    Añadir  <PlusCircle color="white" size={18} title="Add" />
                </Button>

                <Row>
                    <Col >
                        <ConsecutivoTable />
                    </Col>
                </Row>
            </Container>
            {
                show && (
                    <BasicModal handleClose={handleClose} title={"Agregar"}>
                        <ConsecutivoForm />
                    </BasicModal>
                )}


        </>

    )
}

export default ConfiguracionConsecutivo
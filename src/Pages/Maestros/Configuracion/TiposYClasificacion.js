import React from 'react'
import TiposTable from "../../../Components/TiposYClasificacion/TiposTable";
import TiposForm from "../../../Components/TiposYClasificacion/TiposForm";
import BasicModal from '../../../Components/BasicModal';
import { Button , Container, Row, Col} from 'react-bootstrap';
import { useForm } from '../../../App/useForm';
import { PlusCircle } from 'react-bootstrap-icons';

function TiposYClasificacion() {

    const { show, handleClose, handleShow } = useForm();

    return (
        <>
            <Container>
                <Button variant="warning" className='btn btn-sm mb-2 fw-bold text-white' onClick={handleShow}>
                    Añadir  <PlusCircle color="white" size={18} title="Add" />
                </Button>
                <Row>
                    <Col>
                        <TiposTable />
                    </Col>
                </Row>
            </Container>

            {
                show && (
                    <BasicModal handleClose={handleClose} title={"Agregar"}>
                        <TiposForm />
                    </BasicModal>
                )}


        </>
    )
}

export default TiposYClasificacion;
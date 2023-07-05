import React from 'react'
import { Button, Col, Row, Container } from 'react-bootstrap';
import { PlusCircle } from 'react-bootstrap-icons';
import ClientesForm from '../../../Components/Clientes/ClientesForm';
import ClientesTable from '../../../Components/Clientes/ClientesTable';
import { useForm } from '../../../App/useForm';
import BasicModal from '../../../Components/BasicModal';

function Clientes() {

  const { show, handleClose, handleShow } = useForm();

  return (
    <>
      <Container>
        <Button variant="warning" className='btn btn-sm mb-2 fw-bold text-white' onClick={handleShow}>
          Añadir  <PlusCircle color="white" size={18} title="Add" />
        </Button>
        <Row>
          <Col>
            <ClientesTable />
          </Col>
        </Row>
      </Container>

      {
        show && (
          <BasicModal handleClose={handleClose} title={"Agregar"}>
            <ClientesForm />
          </BasicModal>
        )}

    </>
  )
}

export default Clientes
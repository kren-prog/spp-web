import React from 'react'
import ConversionForm from '../../../Components/ConversionUnidades/ConversionForm'
import { useForm } from '../../../App/useForm';
import { PlusCircle } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import BasicModal from '../../../Components/BasicModal';
import ConversionTable from '../../../Components/ConversionUnidades/ConversionTable';

function ConversionUnidades() {

  const { show, handleClose, handleShow } = useForm();

  return (
    <>
      <Button variant="warning" className='btn btn-sm m-2 fw-bold text-white' onClick={handleShow}>
        Añadir  <PlusCircle color="white" size={18} title="Add" />
      </Button>
      {
        show && (
          <BasicModal handleClose={handleClose} title={"Agregar"}>
            <ConversionForm />
          </BasicModal>
        )}
      <ConversionTable />
    </>
  )
}

export default ConversionUnidades
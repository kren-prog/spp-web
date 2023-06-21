import React from 'react'
import { useForm } from '../../../App/useForm';
import { PlusCircle } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import BasicModal from '../../../Components/BasicModal';
import OProcesoTable from '../../../Components/OperacionProceso/OProcesoTable';
import OProcesoForm from '../../../Components/OperacionProceso/OProcesoForm';

function OperacionProceso() {
  const { show, handleClose, handleShow } = useForm();

  return (
    <>
      <Button variant="warning" className='btn btn-sm m-2 fw-bold text-white' onClick={handleShow}>
        Añadir  <PlusCircle color="white" size={18} title="Add" />
      </Button>
      {
        show && (
          <BasicModal handleClose={handleClose} title={"Agregar"}>
            <OProcesoForm />
          </BasicModal>
        )}
      <OProcesoTable />
    </>
  )
}

export default OperacionProceso
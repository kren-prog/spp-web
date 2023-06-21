import React from 'react'
import RProcesoForm from '../../../Components/RecursoProceso/RProcesoForm'
import RProcesoTable from '../../../Components/RecursoProceso/RProcesoTable'
import BasicModal from '../../../Components/BasicModal';
import { Button } from 'react-bootstrap';
import { useForm } from '../../../App/useForm';
import { PlusCircle } from 'react-bootstrap-icons';

function RecursoPorProceso() {

  const { show, handleClose, handleShow } = useForm();

  return (
    <>
      <Button variant="warning" className='btn btn-sm m-2 fw-bold text-white' onClick={handleShow}>
        Añadir  <PlusCircle color="white" size={18} title="Add" />
      </Button>

      {
        show && (
          <BasicModal handleClose={handleClose} title={"Agregar"}>
            <RProcesoForm />
          </BasicModal>
        )}
      <div className='d-flex justify-content-center'>
        <div className='w-50'>
          <RProcesoTable />
        </div>
      </div>
    </>
  )
}

export default RecursoPorProceso
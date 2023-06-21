import React from 'react'
import OperacionesForm from '../../../Components/Operaciones/OperacionesForm';
import BasicModal from '../../../Components/BasicModal';
import { Button } from 'react-bootstrap';
import { useForm } from '../../../App/useForm';
import { PlusCircle } from 'react-bootstrap-icons';
import OperacionesTable from '../../../Components/Operaciones/OperacionesTable';

function Operaciones() {

  const { show, handleClose, handleShow } = useForm();

  return (
    <>
      <Button variant="warning" className='btn btn-sm m-2 fw-bold text-white' onClick={handleShow}>
        Añadir  <PlusCircle color="white" size={18} title="Add" />
      </Button>

      {
        show && (
          <BasicModal handleClose={handleClose} title={"Agregar"}>
            <OperacionesForm />
          </BasicModal>
        )}
      <div className='d-flex justify-content-center'>
        <div className='w-50'>
          <OperacionesTable />
        </div>
      </div>
    </>
  )
}

export default Operaciones
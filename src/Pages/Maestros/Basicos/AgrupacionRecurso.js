import React from 'react'
import AgrupacionForm from '../../../Components/AgrupacionRecurso/AgrupacionForm';
import AgrupacionTable from '../../../Components/AgrupacionRecurso/AgrupacionTable';
import BasicModal from '../../../Components/BasicModal';
import { useForm } from '../../../App/useForm';
import { PlusCircle } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

function AgrupacionRecurso() {

  const { show, handleClose, handleShow } = useForm();

  return (
    <>

      <Button variant="warning" className='btn btn-sm m-2 fw-bold text-white' onClick={handleShow}>
        Añadir  <PlusCircle color="white" size={18} title="Add" />
      </Button>
      {
        show && (
          <BasicModal handleClose={handleClose} title={"Agregar"}>
            <AgrupacionForm />
          </BasicModal>
        )}
      <AgrupacionTable />


    </>
  )
}

export default AgrupacionRecurso
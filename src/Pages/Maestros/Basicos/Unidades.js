import React from 'react'
import UnidadesForm from '../../../Components/Unidades/UnidadesForm';
import { useForm } from '../../../App/useForm';
import { PlusCircle } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import BasicModal from '../../../Components/BasicModal';
import UnidadesTable from '../../../Components/Unidades/UnidadesTable';

function Unidades() {
    
    const { show, handleClose, handleShow } = useForm();

    return (
        <>
            <Button variant="warning" className='btn btn-sm m-2 fw-bold text-white' onClick={handleShow}>
                Añadir  <PlusCircle color="white" size={18} title="Add" />
            </Button>
            {
                show && (
                    <BasicModal handleClose={handleClose} title={"Agregar"}>
                        <UnidadesForm />
                    </BasicModal>
                )}
            <UnidadesTable />
        </>
    )
}

export default Unidades
import React from 'react'
import TiposTable from "../../../Components/TiposYClasificacion/TiposTable";
import TiposForm from "../../../Components/TiposYClasificacion/TiposForm";
import BasicModal from '../../../Components/BasicModal';
import { Button } from 'react-bootstrap';
import { useForm } from '../../../App/useForm';
import { PlusCircle } from 'react-bootstrap-icons';

function TiposYClasificacion() {

    const { show, handleClose, handleShow } = useForm();

    return (
        <>
            <Button variant="warning" className='btn btn-sm m-2 fw-bold text-white' onClick={handleShow}>
                Añadir  <PlusCircle color="white" size={18} title="Add" />
            </Button>
         
            {
                show && (  
                    <BasicModal handleClose={handleClose} title={"Agregar"}>
                        <TiposForm />
                    </BasicModal>
                )}

            <TiposTable/>
        </>
    )
}

export default TiposYClasificacion;
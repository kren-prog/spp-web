import React from 'react'
import ColoresTable from "../../../Components/Colores/ColoresTable";
import ColoresForm from "../../../Components/Colores/ColoresForm";
import BasicModal from '../../../Components/BasicModal';
import { Button } from 'react-bootstrap';
import { useForm } from '../../../App/useForm';
import { PlusCircle } from 'react-bootstrap-icons';

function Colores() {

    const { show, handleClose, handleShow } = useForm();

    return (
        <>
            <Button variant="warning" className='btn btn-sm m-2 fw-bold text-white' onClick={handleShow}>
                Añadir  <PlusCircle color="white" size={18} title="Add" />
            </Button>
         
            {
                show && (  
                    <BasicModal handleClose={handleClose} title={"Agregar"}>
                        <ColoresForm />
                    </BasicModal>
                )}

            <ColoresTable/>
        </>
    )
}

export default Colores;
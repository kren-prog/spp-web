import React from 'react'
import FamiliaDisenoTable from "../../../Components/FamiliaDiseno/FamiliaDisenoTable";
import FamiliaDisenoForm from "../../../Components/FamiliaDiseno/FamiliaDisenoForm";
import BasicModal from '../../../Components/BasicModal';
import { Button } from 'react-bootstrap';
import { useForm } from '../../../App/useForm';
import { PlusCircle } from 'react-bootstrap-icons';

function FamiliaDiseno() {

    const { show, handleClose, handleShow } = useForm();

    return (
        <>
            <Button variant="warning" className='btn btn-sm m-2 fw-bold text-white' onClick={handleShow}>
                Añadir  <PlusCircle color="white" size={18} title="Add" />
            </Button>
         
            {
                show && (  
                    <BasicModal handleClose={handleClose} title={"Agregar"}>
                        <FamiliaDisenoForm />
                    </BasicModal>
                )}

            <FamiliaDisenoTable/>
        </>
    )
}

export default FamiliaDiseno;
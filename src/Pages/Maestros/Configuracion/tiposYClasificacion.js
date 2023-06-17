import React from 'react'
import BasicTable from "../../../Components/basicTable";
import PlaintextExample from "../../../Components/tipos";
import BasicModal from '../../../Components/modal';
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
                        <PlaintextExample />
                    </BasicModal>
                )}

            <BasicTable></BasicTable>
        </>
    )
}

export default TiposYClasificacion;
import React from 'react'
import OpcionalForm from '../../../Components/ConfiguracionOpcional/OpcionalForm';
import BasicModal from '../../../Components/BasicModal';
import { Button } from 'react-bootstrap';
import { useForm } from '../../../App/useForm';
import { PlusCircle } from 'react-bootstrap-icons';
import OpcionalTable from '../../../Components/ConfiguracionOpcional/OpcionalTable';

function ConfiguracionOpcional() {

    const { show, handleClose, handleShow } = useForm();

    return (
        <>
            <Button variant="warning" className='btn btn-sm m-2 fw-bold text-white' onClick={handleShow}>
                Añadir  <PlusCircle color="white" size={18} title="Add" />
            </Button>

            {
                show && (
                    <BasicModal handleClose={handleClose} title={"Agregar"}>
                        <OpcionalForm />
                    </BasicModal>
                )}

            <OpcionalTable />
        </>
    )
}

export default ConfiguracionOpcional
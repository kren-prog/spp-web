import React from 'react'
import FabricaForm from './FabricaForm'
import { PlusCircle } from 'react-bootstrap-icons';
import FabricaTable from './FabricaTable';
import { Button } from 'react-bootstrap';

function Fabrica() {

    const [showForm, setShowForm] = React.useState(false);
    const handleShowForm = () => {
        setShowForm(!showForm);
    };

    return (
        <>
            <Button variant='warning' onClick={handleShowForm} style={{ cursor: 'pointer' }}>
                Nuevo  <PlusCircle color="royalblue" size={24} title="Agregar registro" />
            </Button>

            {
                showForm && (
                    <div className='d-flex justify-content-center'>
                        <div className='w-50'>
                            <FabricaForm />
                        </div>
                    </div>
                )}
            <FabricaTable />
        </>
    )
}

export default Fabrica
import React from 'react'
import PlantaForm from './PlantaForm'
import { PlusCircle } from 'react-bootstrap-icons';
import PlantaTable from './PlantaTable';
import { Button } from 'react-bootstrap';

function Planta() {

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
                            <PlantaForm />
                        </div>
                    </div>
                )}
            <PlantaTable />
        </>
    )
}

export default Planta 
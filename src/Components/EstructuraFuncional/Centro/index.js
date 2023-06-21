import React from 'react'
import { PlusCircle } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import CentroTable from './CentroTable';
import CentroForm from './CentroForm';

function Centro() {

    const [showForm, setShowForm] = React.useState(false);
    const handleShowForm = () => {
        setShowForm(!showForm);
    };

    return (
        <>
            <Button variant='warning' onClick={handleShowForm} style={{ cursor: 'pointer' }}>
                Nuevo  <PlusCircle color="royalblue" size={24} title="Agregar registro" />
            </Button>
            {/* Aca tendria que enviar el id  */}
            {
                showForm && (
                    <div className='d-flex justify-content-center'>
                        <div className='w-50'>
                            <CentroForm />
                        </div>
                    </div> 
                )}
            <CentroTable />
        </>
    )
}

export default Centro
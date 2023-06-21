import React from 'react'
import { PlusCircle } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import ProcesosForm from '../../../Components/Procesos/ProcesosForm';
import ProcesosTable from '../../../Components/Procesos/ProcesosTable';

function Procesos() {

  const [showForm, setShowForm] = React.useState(false);
  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  
  return (
    <>
    
     <Button variant="warning" className='btn btn-sm m-2 fw-bold text-white' onClick={handleShowForm}>
        Añadir  <PlusCircle color="white" size={18} title="Add" />
      </Button>
      {
        showForm && (
          <div className='d-flex justify-content-center'>
            <div className='w-50'>
              <ProcesosForm />
            </div>
          </div>
        )}
      <ProcesosTable />

    </>
  )
}

export default Procesos
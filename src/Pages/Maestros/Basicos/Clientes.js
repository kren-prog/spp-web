import React from 'react'
import { Button } from 'react-bootstrap';
import { PlusCircle } from 'react-bootstrap-icons';
import ClientesForm from '../../../Components/Clientes/ClientesForm';
import ClientesTable from '../../../Components/Clientes/ClientesTable';

function Clientes() {
  // Operacion proceso por referencia
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
              <ClientesForm />
            </div>
          </div>
        )}
      <ClientesTable />

    </>
  )
}

export default Clientes
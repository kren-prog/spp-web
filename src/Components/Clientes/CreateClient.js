import React from 'react'
import ClientesForm from './ClientesForm'

function CreateClient() {
  return (
    <ClientesForm label='Crear cliente' submitText='Crear' submitEvent={()=>console.log("funcion crear")}/>
  )
}

export default CreateClient
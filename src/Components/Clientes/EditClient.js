import React from 'react'
import ClientesForm from './ClientesForm'

function EditClient() {
  return (
    <ClientesForm label='Editar cliente' submitText='Editar' submitEvent={()=>console.log("funcion editar")}/>
  )
}

export default EditClient
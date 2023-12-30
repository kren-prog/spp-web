import React from 'react'
import { Table } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';

function TableTipos({ loading, filteredData, handleShow, confirmDeleteItem }) {


    return (
        <>

            <Table striped bordered hover responsive size="sm" className='table-condensed'>

                <thead>
                    <tr>
                        <th> Codigo</th>
                        <th>Tipo cadena</th>
                        <th>Tipo entero</th>
                        <th>Descripcion</th>
                        <th>Secuencia</th>
                        <th>Atributo N1</th>
                        <th>Atributo N2</th>
                        <th>Atributo N3</th>
                        <th>Atributo N4</th>
                        <th>Atributo C1</th>
                        <th>Atributo C2</th>
                        <th>Atributo C3</th>
                        <th>Atributo C4</th>
                        <th className="fixed-column">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {loading ? <tr><td className='text-center' colSpan="14"><h2>Cargando...</h2></td></tr>
                        :filteredData.map((item) => (
                        <tr key={item.codTipoCadena}>
                            <td>{item.codTipoGenerico}</td>
                            <td>{item.codTipoCadena}</td>
                            <td className='text-center'>{item.codTipoEntero}</td>
                            <td>{item.descripcion}</td>
                            <td className='text-center'>{item.secuencia}</td>
                            <td className='text-center'>{item.atributoN1}</td>
                            <td className='text-center'>{item.atributoN2}</td>
                            <td className='text-center'>{item.atributoN3}</td>
                            <td className='text-center'>{item.atributoN4}</td>
                            <td className='text-center'>{item.atributoC1}</td>
                            <td className='text-center'>{item.atributoC2}</td>
                            <td className='text-center'>{item.atributoC3}</td>
                            <td className='text-center'>{item.atributoC4}</td>
                            <td className="fixed-column">
                                <div className="d-flex p-2">
                                    <span onClick={() => handleShow(2, item)} style={{ cursor: 'pointer' }}>
                                        <Pencil color="royalblue" size={24} title="Editar" />
                                    </span>

                                    <span onClick={() => confirmDeleteItem(item.codTipoGenerico, item.codTipoCadena, item.codTipoEntero, item.descripcion)} style={{ cursor: 'pointer' }}>
                                        <Trash color="DarkRed" size={24} title="Eliminar" />
                                    </span>


                                </div>
                            </td>
                        </tr>
                    ))}

                </tbody>

            </Table>
        </>
    );
}

export default TableTipos;
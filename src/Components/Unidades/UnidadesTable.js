import React from 'react'
import { Table } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';

function UnidadesTable({ loading, filteredData, handleShow, confirmDeleteUnidad }) {

    return (
        <>
            <Table striped bordered hover responsive size="sm">
                <thead>
                    <tr className='table-info'>
                        <th>Cod Unidad</th>
                        <th>Descripcion</th>
                        <th>Usa decimal</th>
                        <th>Magnitud</th>
                        <th className="fixed-column">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {loading ? <tr><td className='text-center' colSpan="5"><h2>Cargando...</h2></td></tr>
                        : filteredData.map((unidad) => (
                            <tr key={unidad.codUnidad}>
                                <td>{unidad.codUnidad}</td>
                                <td>{unidad.desUnidad}</td>
                                <td>{unidad.usaDecimal ? "SI" : "NO"}</td>
                                <td>{unidad.magnitud}</td>
                                <td className="fixed-column">
                                    <div className="d-flex p-2">
                                        <span onClick={() => handleShow(2, unidad)} style={{ cursor: 'pointer' }}>
                                            <Pencil color="royalblue" size={24} title="Editar" />
                                        </span>

                                        <span onClick={() => confirmDeleteUnidad(unidad.codUnidad, unidad.desUnidad)} style={{ cursor: 'pointer' }}>
                                            <Trash color="DarkRed" size={24} title="Eliminar" />
                                        </span>


                                    </div>
                                </td>
                            </tr>
                        ))}

                </tbody>
            </Table>
        </>
    )
}

export default UnidadesTable
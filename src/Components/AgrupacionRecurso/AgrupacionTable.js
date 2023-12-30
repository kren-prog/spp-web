import React from 'react'
import { Table} from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';

function AgrupacionTable({ loading, filteredData, handleShow, confirmDeleteItem }) {
   
    return (

        <Table striped bordered hover responsive size="sm" className='mt-3'>
            <thead>
                <tr>
                    <th>Tipo recurso</th>
                    <th>Agrupacion</th>
                    <th>Descripcion</th>
                    <th>Rpm</th>
                    <th>Mts</th>
                    <th>Eficiencia</th>
                    <th>Produccion</th>
                    <th>Carga minima</th>
                    <th>Tiempo estandar</th>
                    <th className="fixed-column">Acciones</th>
                </tr>
            </thead>
            <tbody>

                {loading ? <tr><td className='text-center' colSpan="14"><h2>Cargando...</h2></td></tr>
                    : filteredData.map((item) => (
                        <tr key={item.tipoRecurso}>
                            <td>{item.tipoRecurso}</td>
                            <td>{item.agrupacion}</td>
                            <td>{item.desAgrupacion}</td>
                            <td>{item.rpm}</td>
                            <td>{item.mts}</td>
                            <td>{item.eficiencia}</td>
                            <td>{item.produccion}</td>
                            <td>{item.cargaMinima}</td>
                            <td>{item.tiempoEstandar}</td>
                            <td className="fixed-column">
                                <div className="d-flex p-2">
                                    <span onClick={() => handleShow(2, item)} style={{ cursor: 'pointer' }}>
                                        <Pencil color="royalblue" size={24} title="Editar" />
                                    </span>

                                    <span onClick={() => confirmDeleteItem(item.tipoRecurso, item.agrupacion, item.desAgrupacion)} style={{ cursor: 'pointer' }}>
                                        <Trash color="DarkRed" size={24} title="Eliminar" />
                                    </span>
                                </div>
                            </td>
                        </tr>
                    ))}

            </tbody>
        </Table>

    )
}

export default AgrupacionTable
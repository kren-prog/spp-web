import React from 'react'
import { Table } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';

function ConversionTable({ loading, filteredData, handleShow, confirmDeleteItem }) {

    return (


        <Table striped bordered hover responsive size="sm">
            <thead>
                <tr>
                    <th>Unidad Origen</th>
                    <th>Factor</th>
                    <th>Unidad destino</th>
                    <th>Usa sql factor</th>
                    <th>sql factor</th>
                    <th>Arg 1</th>
                    <th>Arg 2</th>
                    <th>Arg 3</th>

                    <th className="fixed-column">Acciones</th>
                </tr>
            </thead>
            <tbody>

                {loading ? <tr><td className='text-center' colSpan="14"><h2>Cargando...</h2></td></tr>
                    : filteredData.map((item) => (
                    <tr key={item.ideConversion}>
                        <td>{item.codUnidadOrigen}</td>
                        <td>{item.factor}</td>
                        <td>{item.codUnidadDestino}</td>
                        <td>{item.usaSqlFactor ? "SI" : "NO"}</td>
                        <td>{item.sqlFactor}</td>
                        <td>{item.arg1}</td>
                        <td>{item.arg2}</td>
                        <td>{item.arg3}</td>
                        <td className="fixed-column">
                            <div className="d-flex p-2">
                                <span onClick={() => handleShow(2, item)} style={{ cursor: 'pointer' }}>
                                    <Pencil color="royalblue" size={24} title="Editar" />
                                </span>

                                <span onClick={() => confirmDeleteItem(item.ideConversion)} style={{ cursor: 'pointer' }}>
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

export default ConversionTable
import React from 'react'
import { Table } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';

function FabricaTable({ loading, filteredData, handleShow, confirmDeleteItem }) {

    return (

        <Table striped bordered hover responsive size="sm" className='mt-3'>
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Descripcion</th>
                    <th>Departamento</th>
                    <th>Municipio</th>
                    <th>Razon social</th>
                    <th>Nit</th>
                    <th>Representante legal</th>
                    <th>Direccion (1)</th>
                    <th>Direccion (2)</th>
                    <th>Telefono (1)</th>
                    <th>Telefono (2)</th>
                    <th>Fax</th>
                    <th>Url</th>
                    <th>Email</th>
                    <th className="fixed-column">Acciones</th>
                </tr>
            </thead>
            <tbody>

                {loading ? <tr><td className='text-center' colSpan="15"><h2>Cargando...</h2></td></tr>
                    : filteredData.map((item) => (
                        <tr key={item.codFabrica}>
                            <td>{item.codFabrica}</td>
                            <td>{item.desFabrica}</td>
                            <td>{item.codDepartamento}</td>
                            <td>{item.codMunicipio}</td>
                            <td>{item.razonSocialFabrica}</td>
                            <td>{item.nitFabrica}</td>
                            <td>{item.repLegalFabrica}</td>
                            <td>{item.dir1Fabrica}</td>
                            <td>{item.dir2Fabrica}</td>
                            <td>{item.tel1Fabrica}</td>
                            <td>{item.tel2Fabrica}</td>
                            <td>{item.fax1Fabrica}</td>
                            <td>{item.urlFabrica}</td>
                            <td>{item.emailFabrica}</td>
                            <td className="fixed-column">
                                <div className="d-flex p-2">
                                    <span onClick={() => handleShow(2, item)} style={{ cursor: 'pointer' }}>
                                        <Pencil color="royalblue" size={24} title="Editar" />
                                    </span>

                                    <span onClick={() => confirmDeleteItem(item.codFabrica, item.desFabrica)} style={{ cursor: 'pointer' }}>
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

export default FabricaTable
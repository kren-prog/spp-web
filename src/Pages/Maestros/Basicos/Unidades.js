import React from 'react'
import { Table } from 'react-bootstrap';

function Unidades() {
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = Math.ceil(50 / itemsPerPage); // data.length

    const data = [
        { code: 'KLG', description: 'Kilogramos', decimal: 1, magnitud: 'Masa' },
        { code: 'UN', description: 'Unidad', decimal: 0, magnitud: 'Otras' },
        { code: 'MTS', description: 'Metros', decimal: 1, magnitud: 'Longitud' },
        { code: 'PRE', description: 'Prendas', decimal: 0, magnitud: 'Superficie' },
    ];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    return (
        <Table striped bordered hover responsive size="sm">
            <thead>
                <tr>
                    <th>Cod Unidad</th>
                    <th>Descripcion</th>
                    <th>Usa decimal</th>
                    <th>Magnitud</th>
                    <th className="fixed-column">Acciones</th>
                </tr>
            </thead>
            <tbody>

                {currentData.map((item) => (
                    <tr key={item.code}>
                        <td>{item.code}</td>
                        <td>{item.description}</td>
                        <td>{item.decimal}</td>
                        <td>{item.magnitud}</td>
                        <td className="fixed-column">
                            <div className="d-flex p-2">
                                {/* <a href='/'><Pencil color="royalblue" size={24} title="Editar" /></a> */}
                                {/* <SweetAlert onAlertResponse={handleAlertResponse}
                                                title="Esta seguro?"
                                                text="Se eliminara el item."
                                                icon="warning"
                                                typebtn="delete"
                                            />
                                            <p> {alertResponse}</p> */}
                            </div>
                        </td>
                    </tr>
                ))}

            </tbody>
        </Table>
    )
}

export default Unidades
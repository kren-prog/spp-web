import React from 'react'
import { Table } from 'react-bootstrap';
import SweetAlert from '../../SweetAlert';
import BasicPaginate from '../../BasicPaginate';

function PlantaTable() {
    const [alertResponse, setAlertResponse] = React.useState(null);

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = Math.ceil(50 / itemsPerPage); // data.length


    const handleAlertResponse = (response) => {
        setAlertResponse(response);
    };
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }
    const data = [
        { code: 1, description: 'Prendas', razon: 1, nit: 'M2', representante: 1, direccion1: "abc", direccion2: "def", telefono1: "8884422", telefono2: "3145650545", fax: 57, pais: "colombia", departamento: "Antioquia", municipio: "Rio negro", url: "", email: "" },
        { code: 2, description: 'Dias', razon: 1440, nit: 'Minuto', representante: 0, direccion1: "abc", direccion2: "def", telefono1: "8884422", telefono2: "3145650545", fax: 57, pais: "colombia", departamento: "Antioquia", municipio: "Rio negro", url: "", email: "" },
        { code: 3, description: 'Horas', razon: 60, nit: 'Prendas', representante: 1, direccion1: "abc", direccion2: "def", telefono1: "8884422", telefono2: "3145650545", fax: 57, pais: "colombia", departamento: "Antioquia", municipio: "Rio negro", url: "", email: "" },
    ];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    return (
        <>
            <Table striped bordered hover responsive size="sm" className='mt-3'>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Fabrica</th>
                        <th>Descripcion</th>
                        <th>Departamento</th>
                        <th>Municipio</th>
                        <th>Direccion</th>
                        <th>Telefono </th>
                        <th>Estado</th>
                        <th>Secuencia</th>
                        <th className="fixed-column">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {currentData.map((item) => (
                        <tr key={item.code}>
                            <td>{item.code}</td>
                            <td>{item.description}</td>
                            <td>{item.departamento}</td>
                            <td>{item.municipio}</td>
                            <td>{item.representante}</td>
                            <td>{item.direccion1}</td>
                            <td>{item.fax}</td>
                            <td>{item.url}</td>
                            <td>{item.email}</td>
                            <td className="fixed-column">
                                <div className="d-flex p-2">
                                    {/* <a href='/'><Pencil color="royalblue" size={24} title="Editar" /></a> */}
                                    <SweetAlert onAlertResponse={handleAlertResponse}
                                        title="Esta seguro?"
                                        text="Se eliminara el item."
                                        icon="warning"
                                        typebtn="delete"
                                    />
                                  
                                </div>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
            <div className='d-flex justify-content-center'>
                <BasicPaginate totalPages={totalPages} handlePageClick={handlePageClick} />
            </div>
        </>
    )
}

export default PlantaTable
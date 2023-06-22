import React from 'react'
import { Table } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
//import SweetAlert from '../SweetAlert';
//import { useForm } from '../../App/useForm';
//import BasicModal from '../BasicModal';
//import BasicPaginate from '../BasicPaginate';
import SweetAlert from '../../../Components/SweetAlert';
import { useForm } from '../../../App/useForm';
import BasicModal from '../../../Components/BasicModal';
import BasicPaginate from '../../../Components/BasicPaginate';
   
function ReferenciasVenta() { 
    const { show, handleClose, handleShow } = useForm();
    const [alertResponse, setAlertResponse] = React.useState(null);
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(50 / itemsPerPage); // data.length

    const handleAlertResponse = (response) => {
        setAlertResponse(response);
    };

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }


    const data = [
        { code: 'CON', description: 'Confeccion', observacion: 'Confeccion' },
        { code: 'EMP', description: 'Empaque', observacion: 'Empaque' },
    ];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    return (
        <>
            <Table striped bordered hover responsive size="sm">
                <thead>
                    <tr>
                        <th>Tipo Material</th>
                        <th>Cliente</th>
                        <th>Sucursal</th>
                        <th>Cod Referencia venta</th>
                        <th>Descripcion</th>
                        <th className="fixed-column">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {currentData.map((item) => (
                        <tr key={item.code}>
                            <td>{item.code}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{item.description}</td>
                            <td className="fixed-column">
                                <div className="d-flex p-2">
                                    <span onClick={handleShow} style={{ cursor: 'pointer' }}>
                                        <Pencil color="royalblue" size={24} title="Editar" />
                                    </span>
                                    {/* Aca tendria que enviar el id  */}
                                    {
                                        show && (
                                            <BasicModal handleClose={handleClose} title={"Editar"}>

                                            </BasicModal>
                                        )}

                                    <SweetAlert onAlertResponse={handleAlertResponse}
                                        title="Esta seguro?"
                                        text="Se eliminara el item."
                                        icon="warning"
                                        typebtn="delete"
                                    />
                                    <p> {alertResponse}</p>
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

export default ReferenciasVenta
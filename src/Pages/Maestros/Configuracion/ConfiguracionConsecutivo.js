import React from 'react'
import { Table, Pagination } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import SweetAlert from '../../../Components/sweetAlert';

function ConfiguracionConsecutivo() {
    const [alertResponse, setAlertResponse] = React.useState(null);
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = Math.ceil(50 / itemsPerPage); // data.length

    const handleAlertResponse = (response) => {
        setAlertResponse(response);
    };
  
    const data = [
        { code: 1, identificador: 'John', description: "Lorep ipsum sit amet dolore", prefijo: 3, sufijo: 1, numInicio: 1, incremento: 1, numAviso: 1, numFInal: 2, numActual: 2, c3: 2, c4: 4 },
        { code: 2, identificador: 'Manu', description: "Lorep ipsum sit amet dolore", prefijo: 2, sufijo: 1, numInicio: 1, incremento: 1, numAviso: 1, numFInal: 2, numActual: 2, c3: 2, c4: 4 },
        { code: 3, identificador: 'Kim', description: "Lorep ipsum sit amet dolore", prefijo: 5,  sufijo: 1, numInicio: 1, incremento: 1, numAviso: 1, numFInal: 2, numActual: 2, c3: 2, c4: 4 },
        { code: 4, identificador: 'Rob', description: "Lorep ipsum sit amet dolore", prefijo: 1,  sufijo: 1, numInicio: 1, incremento: 1, numAviso: 1, numFInal: 2, numActual: 2, c3: 2, c4: 4 },
        // Agrega más objetos de datos aquí...
    ];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

  return (
    <Table striped bordered hover responsive size="sm">
    <thead>
        <tr>
            <th>Identificador</th>
            <th>Descripcion</th>
            <th>Prefijo</th>
            <th>Sufijo</th>
            <th>Numero inicio</th>
            <th>Incremento</th>
            <th>Numero aviso</th>
            <th>Numero final</th>
            <th>Numero actual</th>
            <th className="fixed-column">Acciones</th>
        </tr>
    </thead>
    <tbody>

        {currentData.map((item) => (
            <tr key={item.code}>
                <td>{item.identificador}</td>
                <td>{item.description}</td>
                <td>{item.prefijo}</td>
                <td>{item.sufijo}</td>
                <td>{item.numInicio}</td>
                <td>{item.incremento}</td>
                <td>{item.numAviso}</td>
                <td>{item.numFInal}</td>
                <td>{item.numActual}</td>
                <td className="fixed-column">
                    <div className="d-flex p-2">
                        <a href='/'><Pencil color="royalblue" size={24} title="Editar" /></a>
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
  )
}

export default ConfiguracionConsecutivo
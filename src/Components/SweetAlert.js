import React from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { Pencil, Trash } from 'react-bootstrap-icons';

const iconTypes = {
    "edit": <Pencil color="royalblue" size={24} title="Editar" />,
    "delete": <Trash color="DarkRed" size={24} title="Eliminar" />,
}

const SweetAlert = ({ title, text, icon, typebtn, onAlertResponse }) => {
    const handleClick = () => {
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            confirmButtonText: 'OK',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
        }).then((result) => {
            if (result.isConfirmed) {
              onAlertResponse('OK');
            } else if (result.isDismissed) {
              onAlertResponse('Dismissed');
            }
        });
    };

    return (
        <div>
            <span onClick={handleClick} style= {{cursor: 'pointer'}}> {iconTypes[typebtn]} </span>
        </div>
    );
};

export default SweetAlert;

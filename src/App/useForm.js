import React from 'react';
// Boton que se encarga de abrir el modal
function useForm() {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return {
        show,
        handleClose,
        handleShow
    }
}

export { useForm };
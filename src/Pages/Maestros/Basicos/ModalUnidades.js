import React from 'react'
import FormUnidades from './FormUnidades'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalUnidades({ show, handleClose, title, initialValues, onSubmit }) {
    let isEdit;
    title === "Registrar unidad" ? isEdit = true : isEdit = false;

    return (
        <Modal size="lg" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-primary bg-opacity-10'>

                <FormUnidades initialValues={initialValues} onSubmit={onSubmit} isEditable={isEdit} />

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>

            </Modal.Footer>
        </Modal>
    )
}

export default ModalUnidades
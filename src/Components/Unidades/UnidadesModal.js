import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import UnidadesForm from './UnidadesForm';

function UnidadesModal({ show, handleClose, title, initialValues, onSubmit }) {
    let isEdit;
    title === "Registrar unidad" ? isEdit = true : isEdit = false;

    return (
        <Modal size="lg" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-primary bg-opacity-10'>

                <UnidadesForm initialValues={initialValues} onSubmit={onSubmit} isEditable={isEdit} />

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>

            </Modal.Footer>
        </Modal>
    )
}

export default UnidadesModal
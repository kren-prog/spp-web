import React from 'react'
import { AuthContext } from './AuthContext';
import {Button, Modal} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ArrowRightSquare } from 'react-bootstrap-icons';

function Logout() {

    const navigate = useNavigate();

    const authContext = React.useContext(AuthContext);

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onLogout = () => {
        setShow(false);
        authContext.updateUser(null);
        navigate('/login');
    };

    return (
        <>
            <span  onClick={handleShow}>
                Salir <ArrowRightSquare color="white"  />
            </span>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Esta seguro?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Se va a cerrar la sesion</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={onLogout}>
                        OK!
                    </Button>
                </Modal.Footer>
            </Modal>


        </>
    )
}

export default Logout
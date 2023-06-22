import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MiTabla = () => {
    const [showModal, setShowModal] = useState(false);
    const [registroEditado, setRegistroEditado] = useState({});
  
    const abrirModal = (registro) => {
      setRegistroEditado(registro);
      setShowModal(true);
    };
  
    const cerrarModal = () => {
      setShowModal(false);
    };
  
    // Aquí puedes definir tu lista de registros, por ejemplo:
    const registros = [
      { id: 1, nombre: 'Registro 1' },
      { id: 2, nombre: 'Registro 2' },
      // ...
    ];
  
    return (
      <>
        <Table striped bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((registro) => (
              <tr key={registro.id}>
                <td>{registro.id}</td>
                <td>{registro.nombre}</td>
                <td>
                  <Button variant="primary" onClick={() => abrirModal(registro)}>
                    Editar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
  
        <Modal show={showModal} onHide={cerrarModal}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Registro</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formId">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" value={registroEditado.id} disabled />
              </Form.Group>
              <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  value={registroEditado.nombre}
                  onChange={(e) =>
                    setRegistroEditado({ ...registroEditado, nombre: e.target.value })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cerrarModal}>
              Cancelar
            </Button>
            <Button variant="primary">
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  export {MiTabla};
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import "react-bootstrap-submenu/dist/index.css";
import "../assets/styles/headerNavbar.css"
import { NavLink } from 'react-router-dom';

function HeaderNavbar() {
 
  const routesConfig = [];
  routesConfig.push({
    to: '/maestros-pages/configuracion-tipos',
    text: 'Tipos y clasificación'
  });

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="#features">Modulos</Nav.Link>

            <Nav.Link href="#pricing">Datos</Nav.Link>

            <NavDropdownMenu href="#action/3.1" title="Maestros" id="collasible-nav-dropdown" className='nav-dropdown'>

              <DropdownSubmenu href="#action/3.7" title="Configuracion">
                <NavDropdown.Item className='dropdown-item'>
                  <NavLink className="nav-header-link" to="/maestros-pages/configuracion-tipos">Tipos y Clasificaciones</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Clasificacion opcional</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Colores programador</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Configuracion SPP</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Configuracion ERP</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Consecutivos</NavDropdown.Item>
                <DropdownSubmenu href="#action/3.7" title="Text to show">
                  <NavDropdown.Item href="#action/9.1">Sub 2</NavDropdown.Item>
                </DropdownSubmenu>
              </DropdownSubmenu>

              <DropdownSubmenu href="#action/3.7" title="Basicos">

                <NavDropdown.Item href="#action/8.1">Departamentos y municipios</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Unidades</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Conversion unidades</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Esctructuras Funcional</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action/8.1">Agrupacion recurso</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Recursos</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Tipo de recurso por proceso</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action/8.1">Procesos</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Flujos</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Operaciones</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Operacion proceso por material</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action/8.1">Clientes</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Check list por pedidos</NavDropdown.Item>

              </DropdownSubmenu>

              <DropdownSubmenu href="#action/3.7" title="Especificos">

                <NavDropdown.Item href="#action/8.1">Familia diseno</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Colores</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Tallas</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Grupo Talla</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Estampado</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Bordados</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Pinta por material</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Mezcla</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action/8.1">Piezas</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Complemento piezas</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Piezas por familia</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Moldes</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action/8.1">Grupos y subgrupo materiales</NavDropdown.Item>

              </DropdownSubmenu>

              <DropdownSubmenu href="#action/3.7" title="Referencia venta">

                <NavDropdown.Item href="#action/8.1">Colecciones</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Grupo color</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Colores venta</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Talla venta</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Referencias venta</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Sku venta</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.1">Equivalencias</NavDropdown.Item>

              </DropdownSubmenu>

              <NavDropdown.Item href="#action/3.1">Referencia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Curva eficiencia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Producto</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Pedidos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Ordenes produccion</NavDropdown.Item>

            </NavDropdownMenu>

            <Nav.Link href="#pricing">Procesos</Nav.Link>
            <Nav.Link href="#pricing">Programación</Nav.Link>
            <Nav.Link href="#pricing">Reportes</Nav.Link>
            <Nav.Link href="#pricing">Ayuda</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




  );
}

export default HeaderNavbar;
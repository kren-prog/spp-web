import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import "react-bootstrap-submenu/dist/index.css";
import "../assets/styles/headerNavbar.css"
import { Link } from 'react-router-dom';

function HeaderNavbar() {

  const routesConfig = [];
  routesConfig.push({
    to: '/maestros-pages/configuracion-tipos',
    text: 'Tipos y clasificación'
  });

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">SPP Web</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="#features">Modulos</Nav.Link>

            <Nav.Link href="#pricing">Datos</Nav.Link>

            <NavDropdownMenu href="#action/3.1" title="Maestros" id="collasible-nav-dropdown" className='nav-dropdown'>

              <DropdownSubmenu href="#action/3.7" title="Configuracion">

                <NavDropdown.Item className='' as={Link} to="/maestros-pages/configuracion-tipos">
                  Tipos y Clasificaciones
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/maestros-pages/configuracion-opcional">
                  Clasificacion opcional
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/maestros-pages/configuracion-color">
                  Colores programador
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/maestros-pages/configuracion-spp">
                  Configuracion SPP
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/maestros-pages/configuracion-erp">
                  Configuracion ERP
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/maestros-pages/configuracion-consecutivo">
                  Consecutivos
                </NavDropdown.Item>

                <DropdownSubmenu href="#action/3.7" title="Text to show">
                  <NavDropdown.Item href="#action/9.1">Sub 2</NavDropdown.Item>
                </DropdownSubmenu>

              </DropdownSubmenu>

              <DropdownSubmenu href="#action/3.7" title="Basicos">

                <NavDropdown.Item as={Link} to="/maestros-pages/basicos-departamentos">Departamentos y municipios</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/maestros-pages/basicos-unidades">Unidades</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/maestros-pages/basicos-conversion-unidades">Conversion unidades</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/maestros-pages/basicos-estructura-funcional">Esctructura Funcional</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item as={Link} to="/maestros-pages/basicos-agrupacion-recurso">Agrupacion recurso</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/maestros-pages/basicos-recursos">Recursos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/maestros-pages/basicos-recurso-proceso">Tipo de recurso por proceso</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item as={Link} to="/maestros-pages/basicos-procesos">Procesos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/maestros-pages/basicos-flujos">Flujos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/maestros-pages/basicos-operaciones">Operaciones</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/maestros-pages/basicos-operacion-proceso">Operacion proceso por material</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item  as={Link} to="/maestros-pages/basicos-clientes">Clientes</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/maestros-pages/basicos-validaciones">Check list por pedidos</NavDropdown.Item>

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
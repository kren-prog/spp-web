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

  const routesConfig = [{
    to: '/maestros-pages/configuracion-tipos',
    text: 'Tipos y clasificación'
  }, {
    to: '/maestros-pages/configuracion-opcional',
    text: 'Clasificacion opcional'
  }, {
    to: '/maestros-pages/configuracion-color',
    text: 'Colores programador'
  }, {
    to: '/maestros-pages/configuracion-spp',
    text: 'Configuracion SPP'
  }, {
    to: '/maestros-pages/configuracion-erp',
    text: 'Configuracion ERP'
  }, {
    to: '/maestros-pages/configuracion-consecutivo',
    text: 'Consecutivos'
  }];

  const routesBasic = [{
    to: '/maestros-pages/basicos-departamentos',
    text: 'Departamentos y municipios'
  }, {
    to: '/maestros-pages/basicos-unidades',
    text: 'Unidades'
  }, {
    to: '/maestros-pages/basicos-conversion-unidades',
    text: 'Conversion unidades'
  }, {
    to: '/maestros-pages/basicos-estructura-funcional',
    text: 'Esctructura Funcional'
  }, {
    to: '',
    text: 'DIVIDER'
  }, {
    to: '/maestros-pages/basicos-agrupacion-recurso',
    text: 'Agrupacion Recurso'
  }, {
    to: '/maestros-pages/basicos-recursos',
    text: 'Recursos'
  }, {
    to: '/maestros-pages/basicos-recurso-proceso',
    text: 'Tipo de recurso por proceso'
  }, {
    to: '',
    text: 'DIVIDER'
  }, {
    to: '/maestros-pages/basicos-procesos',
    text: 'Procesos'
  },{
    to: '/maestros-pages/basicos-flujos',
    text: 'Flujos'
  },{
    to: '/maestros-pages/basicos-operaciones',
    text: 'Operaciones'
  },{
    to: '/maestros-pages/basicos-operacion-proceso',
    text: 'Operacion proceso por material'
  },{
    to: '',
    text: 'DIVIDER'
  },{
    to: '/maestros-pages/basicos-clientes',
    text: 'Clientes'
  },{
    to: '/maestros-pages/basicos-validaciones',
    text: 'Check list por pedidos'
  }];

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">SPP Web</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="#features" >Modulos</Nav.Link>

            <Nav.Link href="#pricing">Datos</Nav.Link>

            <NavDropdownMenu href="#action/3.1" title="Maestros" id="collasible-nav-dropdown" className='nav-dropdown'>

              <DropdownSubmenu href="#action/3.7" title="Configuracion">

                {routesConfig.map(route => (
                  <NavDropdown.Item className='' as={Link} to={route.to}>
                    {route.text}
                  </NavDropdown.Item>
                ))}

              </DropdownSubmenu>

              <DropdownSubmenu href="#action/3.7" title="Basicos">

                {routesBasic.map((item) => (
                  <div key={item.to}>
                    {item.text === 'DIVIDER' ? <NavDropdown.Divider /> : <NavDropdown.Item className='' as={Link} to={item.to}>
                      {item.text}
                    </NavDropdown.Item>}
                  </div>
                ))}

              </DropdownSubmenu>

              <DropdownSubmenu href="#action/3.7" title="Especificos">

                <NavDropdown.Item href="#action/8.1">Familia diseño</NavDropdown.Item>
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
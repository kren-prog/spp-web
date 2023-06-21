import React from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import Fabrica from '../../../Components/EstructuraFuncional/Fabrica';
import Planta from '../../../Components/EstructuraFuncional/Planta';
import Centro from '../../../Components/EstructuraFuncional/Centro';
import Subcentro from '../../../Components/EstructuraFuncional/Subcentro';

function EstructuraFuncional() {


  return (
    <>

      <Tabs
        defaultActiveKey="fabrica"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="fabrica" title="Fabrica">
          <Fabrica />
        </Tab>
        <Tab eventKey="planta" title="Planta">
          <Planta />
        </Tab>
        <Tab eventKey="centro" title="Centro">
          <Centro />
        </Tab>
        <Tab eventKey="subcentro" title="Subcentro">
          <Subcentro />
        </Tab>
        <Tab eventKey="negocio" title="Negocio">
          Tab content for Loooonger Tab
        </Tab>
      </Tabs>

    </>
  )
}

export default EstructuraFuncional
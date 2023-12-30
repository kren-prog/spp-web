import React from 'react'
import { Table } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';

function ProcesosTable({ loading, filteredData, handleShow, confirmDeleteItem }) {

  return (

    <Table striped bordered hover responsive size="sm" className='mt-3'>
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Tipo Negocio</th>
          <th>Descripcion</th>
          <th>Des corta</th>
          <th>Tipo ficha</th>
          <th>Abreviatura</th>
          <th>Interno</th>
          <th>Subproducto por defecto</th>
          <th>Porcentaje por defecto</th>
          <th>Porcentaje del Porc 2as pasadas</th>
          <th>Controlado por Gantt</th>
          <th>Tipo material producido</th>
          <th>Cod unidad</th>
          <th>Unidad Alterna</th>
          <th>Mono operacion</th>
          <th>Usa maquinas</th>
          <th>Origen estandar</th>
          <th>Caracteristica que genera</th>
          <th>Unid pedido a Unid</th>
          <th>Ide Conversion</th>
          <th>Tipo lead time</th>
          <th>Lead time</th>
          <th>Tiempo Entre Ref</th>
          <th className="fixed-column">Acciones</th>
        </tr>
      </thead>
      <tbody>

        {loading ? <tr><td className='text-center' colSpan="14"><h2>Cargando...</h2></td></tr>
          : filteredData.map((item) => (
            <tr key={item.codProceso}>
              <td>{item.codProceso}</td>
              <td>{item.tipoNegocio}</td>
              <td>{item.desProceso}</td>
              <td>{item.desCorta}</td>
              <td>{item.tipoFicha}</td>
              <td>{item.abreviatura}</td>
              <td>{item.interno}</td>
              <td>{item.subproductoPorDefecto}</td>
              <td>{item.porcentajePorDefecto}</td>
              <td>{item.porcentajeDelPorc2asPasadas}</td>
              <td>{item.controladoPorGantt}</td>
              <td>{item.tipoMaterialProducido}</td>
              <td>{item.codUnidad}</td>
              <td>{item.codUnidadAlterna}</td>
              <td>{item.monoOperacion}</td>
              <td>{item.usaMaquinas}</td>
              <td>{item.origenEstandar}</td>
              <td>{item.caracteristicaQueGenera}</td>
              <td>{item.upedidoAUproceso}</td>
              <td>{item.ideConversion}</td>
              <td>{item.tipoLeadTime}</td>
              <td>{item.leadTime}</td>
              <td>{item.tiempoEntreReferencias}</td>
              <td className="fixed-column">
                <div className="d-flex p-2">
                  <span onClick={() => handleShow(2, item)} style={{ cursor: 'pointer' }}>
                    <Pencil color="royalblue" size={24} title="Editar" />
                  </span>

                  <span onClick={() => confirmDeleteItem(item.codProceso, item.desProceso)} style={{ cursor: 'pointer' }}>
                    <Trash color="DarkRed" size={24} title="Eliminar" />
                  </span>
                </div>
              </td>
            </tr>
          ))}

      </tbody>
    </Table>

  )
}

export default ProcesosTable
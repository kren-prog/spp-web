import React, { Component} from 'react'; //lazy
import { Routes, Route } from 'react-router-dom';
import TiposYClasificacion from '../Pages/Maestros/Configuracion/TiposYClasificacion';
import ConfiguracionOpcional from '../Pages/Maestros/Configuracion/ConfiguracionOpcional';
import ConfiguracionColor from '../Pages/Maestros/Configuracion/ConfiguracionColor';
import ConfiguracionConsecutivo from '../Pages/Maestros/Configuracion/ConfiguracionConsecutivo';
import ConfiguracionSPP from '../Pages/Maestros/Configuracion/ConfiguracionSPP';
import DepartamentosMunicipios from '../Pages/Maestros/Basicos/DepartamentosMunicipios';
import Unidades from '../Pages/Maestros/Basicos/Unidades';
import ConversionUnidades from '../Pages/Maestros/Basicos/ConversionUnidades';
import EstructuraFuncional from '../Pages/Maestros/Basicos/EstructuraFuncional';
import AgrupacionRecurso from '../Pages/Maestros/Basicos/AgrupacionRecurso';
import Recursos from '../Pages/Maestros/Basicos/Recursos';
import RecursoPorProceso from '../Pages/Maestros/Basicos/RecursoPorProceso';
import Procesos from '../Pages/Maestros/Basicos/Procesos';
import Flujos from '../Pages/Maestros/Basicos/Flujos';
import Operaciones from '../Pages/Maestros/Basicos/Operaciones';
import OperacionProceso from '../Pages/Maestros/Basicos/OperacionProceso';
import Clientes from '../Pages/Maestros/Basicos/Clientes';
import Validaciones from '../Pages/Maestros/Basicos/Validaciones';
//const TiposClasificacion = lazy(() => import('../Pages/Maestros/Configuracion/tiposYClasificacion'));

class AppRoutes extends Component {
  render() {
    return (
      // <HashRouter>
        <Routes>
          {/* <Route exact path="/dashboard" component={ Dashboard } /> */}

          <Route path="/maestros-pages/configuracion-tipos" element={<TiposYClasificacion/> } />
          <Route path="/maestros-pages/configuracion-opcional" element={<ConfiguracionOpcional/> } />
          <Route path="/maestros-pages/configuracion-color" element={<ConfiguracionColor/> } />
          <Route path="/maestros-pages/configuracion-consecutivo" element={<ConfiguracionConsecutivo/> } />
          <Route path="/maestros-pages/configuracion-spp" element={<ConfiguracionSPP/> } />

          <Route path="/maestros-pages/basicos-departamentos" element={<DepartamentosMunicipios/> } />
          <Route path="/maestros-pages/basicos-unidades" element={<Unidades/> } />
          <Route path="/maestros-pages/basicos-conversion-unidades" element={<ConversionUnidades/> } />
          <Route path="/maestros-pages/basicos-estructura-funcional" element={<EstructuraFuncional/> } />
          <Route path="/maestros-pages/basicos-agrupacion-recurso" element={<AgrupacionRecurso/> } />
          <Route path="/maestros-pages/basicos-recursos" element={<Recursos/> } />
          <Route path="/maestros-pages/basicos-recurso-proceso" element={<RecursoPorProceso/> } />
          <Route path="/maestros-pages/basicos-procesos" element={<Procesos/> } />
          <Route path="/maestros-pages/basicos-flujos" element={<Flujos/> } />
          <Route path="/maestros-pages/basicos-operaciones" element={<Operaciones/> } />
          <Route path="/maestros-pages/basicos-operacion-proceso" element={<OperacionProceso/> } />
          <Route path="/maestros-pages/basicos-clientes" element={<Clientes/> } />
          <Route path="/maestros-pages/basicos-validaciones" element={<Validaciones/> } />
        
        

          <Route path="*" element={<p>NOT FOUND</p>} />

        </Routes>
      // </HashRouter>
    );
  }
}

export default AppRoutes;
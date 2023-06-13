import React, { Component} from 'react'; //lazy
import { Routes, Route } from 'react-router-dom';
import TiposYClasificacion from '../Pages/Maestros/Configuracion/tiposYClasificacion';
import ConfiguracionOpcional from '../Pages/Maestros/Configuracion/ConfiguracionOpcional';
import ConfiguracionColor from '../Pages/Maestros/Configuracion/ConfiguracionColor';
import ConfiguracionConsecutivo from '../Pages/Maestros/Configuracion/ConfiguracionConsecutivo';
import ConfiguracionSPP from '../Pages/Maestros/Configuracion/ConfiguracionSPP';
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

          <Route path="*" element={<p>NOT FOUND</p>} />

        </Routes>
      // </HashRouter>
    );
  }
}

export default AppRoutes;
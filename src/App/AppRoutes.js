import React, { Component} from 'react'; //lazy
import { Routes, Route } from 'react-router-dom';
import TiposYClasificacion from '../Pages/Maestros/Configuracion/tiposYClasificacion';
//const TiposClasificacion = lazy(() => import('../Pages/Maestros/Configuracion/tiposYClasificacion'));

class AppRoutes extends Component {
  render() {
    return (
      // <HashRouter>
        <Routes>
          {/* <Route exact path="/dashboard" component={ Dashboard } /> */}

          <Route path="/maestros-pages/configuracion-tipos" element={<TiposYClasificacion/> } />

          <Route path="*" element={<p>NOT FOUND</p>} />

        </Routes>
      // </HashRouter>
    );
  }
}

export default AppRoutes;
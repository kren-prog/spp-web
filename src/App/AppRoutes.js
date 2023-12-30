import React, { Component, Suspense, lazy } from 'react'; //lazy
import SpinnerDefault from 'Components/SpinnerDefault';
import WithFullScreenCenterContent from 'Components/WithFullScreenCenterContent';
import { Routes, Route } from 'react-router-dom';

import ConfiguracionOpcional from '../Pages/Maestros/Configuracion/ConfiguracionOpcional';
import ConfiguracionColor from '../Pages/Maestros/Configuracion/ConfiguracionColor';
import ConfiguracionConsecutivo from '../Pages/Maestros/Configuracion/ConfiguracionConsecutivo';
import ConfiguracionSPP from '../Pages/Maestros/Configuracion/ConfiguracionSPP';
import DepartamentosMunicipios from '../Pages/Maestros/Basicos/DepartamentosMunicipios';
import ConversionUnidades from '../Pages/Maestros/Basicos/ConversionUnidades';
import EstructuraFuncional from '../Pages/Maestros/Basicos/EstructuraFuncional';
import Recursos from '../Pages/Maestros/Basicos/Recursos';
import RecursoPorProceso from '../Pages/Maestros/Basicos/RecursoPorProceso';
import Procesos from '../Pages/Maestros/Basicos/Procesos';
import Flujos from '../Pages/Maestros/Basicos/Flujos';
import Operaciones from '../Pages/Maestros/Basicos/Operaciones';
import OperacionProceso from '../Pages/Maestros/Basicos/OperacionProceso';
import Clientes from '../Pages/Maestros/Basicos/Clientes';
import Validaciones from '../Pages/Maestros/Basicos/Validaciones';
import Colecciones from '../Pages/Maestros/ReferenciaVenta/Colecciones';
import ColoresVenta from '../Pages/Maestros/ReferenciaVenta/ColoresVenta';
import Equivalencias from '../Pages/Maestros/ReferenciaVenta/Equivalencias';
import GrupoColor from '../Pages/Maestros/ReferenciaVenta/GrupoColor';
import ReferenciasVenta from '../Pages/Maestros/ReferenciaVenta/ReferenciasVenta';
import SkuVenta from '../Pages/Maestros/ReferenciaVenta/SkuVenta';
import TallaVenta from '../Pages/Maestros/ReferenciaVenta/TallaVenta';
import Colores from '../Pages/Maestros/Especificos/Colores';
import FamiliaDiseno from '../Pages/Maestros/Especificos/FamiliaDiseno';
import Tallas from '../Pages/Maestros/Especificos/Tallas';
import GrupoTalla from '../Pages/Maestros/Especificos/GrupoTalla';
import CurvasEficiencia from '../Pages/Maestros/CurvasEficiencia';
import Referencia from '../Pages/Maestros/Referencia';
import Pedidos from '../Pages/Maestros/Pedidos';
import Producto from '../Pages/Maestros/Producto';
import OrdenesProduccion from '../Pages/Maestros/OrdenesProduccion';
import SuspenseDefault from 'Components/SuspenseDefault';

import Login from '../Components/Login';
import NotFound from '../Pages/notFound';
import ProtectedRoute from './ProtectedRoute';

class AppRoutes extends Component {
  render() {
    const SpinnerCenteredFullScreen = WithFullScreenCenterContent(<SpinnerDefault />);
    const Unidades = lazy(() => import('Pages/Maestros/Basicos/Unidades'));
    const TiposGenericos = lazy(() => import('Pages/Maestros/Configuracion/TiposYClasificacion'));
    const AgrupacionRecurso = lazy(() => import('Pages/Maestros/Basicos/AgrupacionRecurso'));

    return (
      // <HashRouter>

      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/" element={<SuspenseDefault path={import('Components/Landing')} />} />

        <Route element={<ProtectedRoute />} >

          <Route path='/maestros-pages/configuracion-tipos'
            element={<Suspense fallback={<SpinnerCenteredFullScreen />}>
              <TiposGenericos />
            </Suspense>}>
          </Route>


          <Route path="/maestros-pages/basicos-departamentos" element={<DepartamentosMunicipios />} />

          <Route path='/maestros-pages/basicos-unidades'
            element={<Suspense fallback={<SpinnerCenteredFullScreen />}>
              <Unidades />
            </Suspense>}>
          </Route>

          <Route path="/maestros-pages/basicos-conversion-unidades" element={<ConversionUnidades />} />

          <Route path='/maestros-pages/basicos-agrupacion-recurso'
            element={<Suspense fallback={<SpinnerCenteredFullScreen />}>
              <AgrupacionRecurso />
            </Suspense>}>
          </Route>
          
        </Route>


        <Route path="/maestros-pages/configuracion-opcional" element={<ConfiguracionOpcional />} />
        <Route path="/maestros-pages/configuracion-color" element={<ConfiguracionColor />} />
        <Route path="/maestros-pages/configuracion-consecutivo" element={<ConfiguracionConsecutivo />} />
        <Route path="/maestros-pages/configuracion-spp" element={<ConfiguracionSPP />} />
        
        <Route path="/maestros-pages/basicos-estructura-funcional" element={<EstructuraFuncional />} />
        
        <Route path="/maestros-pages/basicos-recursos" element={<Recursos />} />
        <Route path="/maestros-pages/basicos-recurso-proceso" element={<RecursoPorProceso />} />
        <Route path="/maestros-pages/basicos-procesos" element={<Procesos />} />
        <Route path="/maestros-pages/basicos-flujos" element={<Flujos />} />
        <Route path="/maestros-pages/basicos-operaciones" element={<Operaciones />} />
        <Route path="/maestros-pages/basicos-operacion-proceso" element={<OperacionProceso />} />
        <Route path="/maestros-pages/basicos-clientes" element={<Clientes />} />
        <Route path="/maestros-pages/basicos-validaciones" element={<Validaciones />} />

        <Route path="/maestros-pages/especificos-colores" element={<Colores />} />
        <Route path="/maestros-pages/especificos-familia-diseno" element={<FamiliaDiseno />} />
        <Route path="/maestros-pages/especificos-tallas" element={<Tallas />} />
        <Route path="/maestros-pages/especificos-grupo-talla" element={<GrupoTalla />} />

        <Route path="/maestros-pages/referencia-colecciones" element={<Colecciones />} />
        <Route path="/maestros-pages/referencia-grupo-color" element={<GrupoColor />} />
        <Route path="/maestros-pages/referencia-colores-venta" element={<ColoresVenta />} />
        <Route path="/maestros-pages/referencia-talla-venta" element={<TallaVenta />} />
        <Route path="/maestros-pages/referencia-venta" element={<ReferenciasVenta />} />
        <Route path="/maestros-pages/referencia-sku-venta" element={<SkuVenta />} />
        <Route path="/maestros-pages/referencia-equivalencias" element={<Equivalencias />} />

        <Route path="/maestros-pages/referencia" element={<Referencia />} />
        <Route path="/maestros-pages/curvas-eficiencia" element={<CurvasEficiencia />} />
        <Route path="/maestros-pages/producto" element={<Producto />} />
        <Route path="/maestros-pages/pedidos" element={<Pedidos />} />
        <Route path="/maestros-pages/ordenes-produccion" element={<OrdenesProduccion />} />

        <Route path="*" element={<NotFound />} />



      </Routes>

      // </HashRouter>
    );
  }
}

export default AppRoutes;
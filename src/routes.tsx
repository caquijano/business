import React, {lazy} from 'react'
import {
  createBrowserRouter,
} from "react-router-dom"
import Auth from './components/Login/Auth';
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/errors/NotFound';
import Empleados from './components/empleados/Empleados';
import Informe from './components/Informes/Informe';
import Servicio from './components/servicios/Servicio'
import Ventas from './components/ventas/Ventas';
import Liquidar from './components/liquidar/Liquidar';

const App = lazy(()=> import('./App'));

const routesPublic = createBrowserRouter ([
    { path: '*', element: <NotFound/>},
    { path: '/auth', element: <Auth/> }
])

const routesPrivate = createBrowserRouter ([
    { path: '*', element: <NotFound/>},
    { path: '/inicio', element: <Ventas/> },
    { path: '/empleados', element: <Empleados/> },
    { path: '/ventas', element: <Empleados/> },
    { path: '/resumen', element: <Informe/> },
    { path: '/productos', element: <Empleados/> },
    { path: '/servicios', element: <Servicio/> },
    { path: '/liquidar', element: <Liquidar/> },

    
])

export {routesPrivate, routesPublic};
import React, {lazy} from 'react'
import {
  createBrowserRouter,
} from "react-router-dom"
import Auth from './components/Login/Auth';
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/errors/NotFound';
import Empleados from './components/dashboard/Empleados';
const App = lazy(()=> import('./App'));

const routesPublic = createBrowserRouter ([
    { path: '*', element: <NotFound/>},
    { path: '/auth', element: <Auth/> }
])

const routesPrivate = createBrowserRouter ([
    { path: '*', element: <NotFound/>},
    { path: '/dashboard', element: <Dashboard/> },
    { path: '/empleados', element: <Empleados/> }
])

export {routesPrivate, routesPublic};
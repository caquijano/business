import React, { useState } from 'react'
import Navbar from '../components/navegation/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from '../App';
import { routesPrivate, routesPublic } from "../routes";
import Sidebar from '../components/navegation/Sidebar';
import {onAuthStateChanged} from "firebase/auth"
import { auth } from '../firebase';

export default function Routes() {

  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase:any)=>{
    if (usuarioFirebase) {
      setUser(usuarioFirebase)
    }else{
      setUser(null)
    }
  })
  return (
    <>
      {
        user
          ?
          <>
            <Navbar />
            <div style={{display: 'flex'}}>
              <Sidebar />
              <RouterProvider router={routesPrivate} />
            </div>
          </>
          :
          <RouterProvider router={routesPublic} />
      }
    </>
  )
}

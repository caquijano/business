import React, { useEffect, useState } from 'react'
import { BsLightbulb } from 'react-icons/bs'
//import {  } from "../../images/logohair.png";


export default function Navbar() {
  const [modo, setModo] = useState(false)
  const [click, setclick] = useState(true)
  function theme() {
    setModo(!modo)
  }
  useEffect(() => {
    theme()
  }, [click])

  return (
    <div style={{minHeight:"9vh"}}>
      <nav className={modo ? "navbar navbar-expand-lg bg-body-tertiary bg-dark" : "navbar navbar-expand-lg bg-body-tertiary"} >
        <div className={modo ? "container-fluid bg-dark" : "container-fluid"} >
          <img src="./logohair.png" className='image-fluid' alt="" />
          <a className={`navbar-brand ${modo ? "text-light" : ""}`} href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link active ${modo ? "text-light" : ""}`} aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link active ${modo ? "text-light" : ""}`} href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle ${modo ? "text-light" : ""}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className={`dropdown-item ${modo ? "text-light" : ""}`} href="#">Action</a></li>
                  <li><a className={`dropdown-item ${modo ? "text-light" : ""}`} href="#">Another action</a></li>
                  <li><hr className="dropdown-divider text-light"></hr></li>
                  <li><a className={`dropdown-item ${modo ? "text-light" : ""}`} href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className={`nav-link disabled ${modo ? "text-light" : ""}`}>Disabled</a>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <button style={{ marginRight: "10px" }} type="button" className={modo ? "btn btn-light" : "btn btn-dark"} onClick={() => setclick(!click)}> <BsLightbulb /> </button>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className={`btn btn-outline-success ${modo ? "text-light" : ""}`} type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

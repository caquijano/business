import React, { useState } from 'react'
import FormLogin from './FormLogin'
import FormRecuperar from './FormRecuperar'
import FormRegistrate from './FormRegistrate'

export default function Auth() {

    const [tipe, settipe] = useState(1)

    return (
        <div style={{ marginInline: "30%", marginTop: 60 }} className="card text-center">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className={`nav-link ${tipe == 1 ? "active":""}`} href="#" onClick={() => settipe(1)}>Login</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${tipe == 2 ? "active":""}`} href="#" onClick={() => settipe(2)}>Registrate</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${tipe == 3 ? "active":""}`} href="#" onClick={() => settipe(3)}>Recuperar</a>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                {
                    tipe == 1 ?
                        <FormLogin /> : tipe == 2 ?
                            <FormRegistrate /> : <FormRecuperar />
                }
            </div>
        </div>
    )
}

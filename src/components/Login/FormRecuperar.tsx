import React from 'react'

export default function FormRecuperar() {
  return (
    <div className='m-5'>
            <form>
                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control" />
                    <label className="form-label" >Email</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" />
                    <label className="form-label" >Nueva Contraseña</label>
                </div>

                <button type="button" className="btn btn-primary btn-block mb-4">Recuperar</button>
            </form>
        </div>
  )
}

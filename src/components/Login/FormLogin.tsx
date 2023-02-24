import React, { useState } from 'react'
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase';
import { NavLink, useNavigate } from 'react-router-dom'

export default function FormLogin(tipe:any) {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onLogin = (e:any) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user.uid;
            navigate("/dashboard")
            console.log(user);
            window.localStorage.setItem("UID",user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }

    return (
        <div className='m-5'>
            <form>
                <div className="form-outline mb-4">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                    <label className="form-label" >Email </label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                    <label className="form-label" >Contraseña</label>
                </div>

                <a type="button" className="btn btn-primary btn-block mb-4" onClick={onLogin} href='/dashboard'>Iniciar Sesión</a>

                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                </div>
            </form>
        </div>
    )
}

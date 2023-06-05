import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

export default function FormRegistrate() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [repeatPassword, setrepeatPassword] = useState('');
    const [equals, setequals] = useState(true)

    const onSubmit = async (e: any) => {
        if (password == repeatPassword) {
            e.preventDefault()

            await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user.uid;
                   
                    // ...
                    window.localStorage.setItem("UID",user)
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                
                });
        } else {
            setequals(false)
        }
    }
    return (
        <div className='m-5'>
            <form>

                <div className="form-outline mb-4">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                    <label className="form-label" >Email</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                    <label className="form-label" >Contraseña</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" value={repeatPassword} onChange={(e) => setrepeatPassword(e.target.value)} className="form-control" />
                    <label className="form-label" >Repetir Contraseña</label>
                </div>
                <div className="row mb-4">
                   { equals ? <p></p> : <p className='text-danger'>Las contraseñas no coinciden</p>}
                </div>

                <button type="submit" onClick={onSubmit} className="btn btn-primary btn-block mb-4">Registrame</button>
            </form>
           
        </div>
    )
}

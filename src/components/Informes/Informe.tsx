    
import { db } from '../../firebase'

import {
    query,
    collection,
    onSnapshot,
    where
} from 'firebase/firestore'
import { useState, useEffect } from 'react'

const empleados = ['karent', 'Arthuro', 'Laura']
const formateador = new Intl.NumberFormat('es-ES');

interface venta {
    id: string,
    total: number
    fecha: number,
    medioPago: string
}

export default function Informe() {
    const [ventas, setVentas] = useState<Array<venta>>([]);
    const [fechaInicio, setFechaInicio] = useState(0);
    const [fechaFin, setFechaFin] = useState(0);
    const [total, setTotal] = useState(0)
    useEffect(() => {
        let suma = 0
        for (let i = 0; i < ventas.length; i++) suma += Number(ventas[i].total);
        setTotal(suma)
    }, [ventas]);


    const onChangeDateStart = (e: any) => {
        const fecha = new Date(e.target.value + " 00:00:00")
        setFechaInicio(Number(fecha))
    }
    const onChangeDateEnd = (e: any) => {
        const fecha = new Date(e.target.value + " 23:59:59")
        setFechaFin(Number(fecha))

    }

    const handleSubmit = (e: any) => {
        e.preventDefault()

        const ventasRef = query(collection(db, 'facturas'), where('fecha', '>=', fechaInicio),where('fecha','<=',fechaFin))

        const unsubscribe = onSnapshot(ventasRef, (querySnapshot) => {
            let todosArr: any[] = [];
            querySnapshot.forEach((doc) => {
                todosArr.push({ ...doc.data(), id: doc.id });
            });
            setVentas(todosArr)
        });
        return () => unsubscribe();
    }
    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit} className="form">
                <div className="row g-4">
                    <div className="form-group col-sm-3">
                        <label className="form-check-label m-2" >Fecha Inicio:</label>
                        <input type="date" id="start"
                            onChange={onChangeDateStart} required></input>
                    </div>
                    <div className="form-group col-sm-3">
                        <label className="form-check-label m-2" >Fecha Inicio:</label>
                        <input type="date" id="end"
                            onChange={onChangeDateEnd} required></input>
                    </div>
                    <div className="form-group col-sm-3 mr-0">
                        <label className="form-check-label m-2" >Medio de Pago:</label>
                        <select>
                            <option> Todos </option>
                            {empleados.map((empleado, index) => {
                                return (

                                    <option key={index}> {empleado} </option>
                                )
                            })
                            }</select>
                    </div>
                    <button type="submit" className="btn btn-primary col-2">Confirmar</button>
                </div>

            </form >

            <div className="card mt-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Fecha</th>
                            <th>Medio de Pago</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ventas?.map((venta, index) => {
                                
                                let fecha =new Date(venta.fecha).toLocaleDateString()
                                return (
                                    
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{fecha}</td>
                                    <td>{venta.medioPago}</td>
                                    <td>${formateador.format(venta.total)}</td>
                                </tr>
                                )
                            }
                            )


                        }
                        <tr>
                            <td></td>
                            <td></td>
                            <td><strong>Total :</strong></td>
                            <td> <strong>${formateador.format(total)}</strong> </td>
                        </tr>

                    </tbody>
                </table>

            </div>


        </div >
    )

}
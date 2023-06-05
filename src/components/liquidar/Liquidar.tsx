import { useEffect, useState } from 'react'
import { db } from '../../firebase'

import {
    query,
    collection,
    onSnapshot,
    where
} from 'firebase/firestore'
const formateador = new Intl.NumberFormat('es-ES');

interface factura {
    id: string,
    total: number
    fecha: number,
    medioPago: string
}
interface venta {
    id: string,
    empleadoId: string,
    facturaID: string,
    precio: number,
    servicioID: string
}
interface list_servicios {
    id: string,
    nombre: string,
    descripcion: string,
    precio: number
}
interface list_empleados {
    id: string,
    nombre: string,
    apellido: string,
    utilidad: number,
    celular: string,
}


export default function Liquidar() {
    const [datos, setDatos] = useState<Array<any>>();
    const [fechaInicio, setFechaInicio] = useState(0);
    const [fechaFin, setFechaFin] = useState(0);
    const [ventas, setVentas] = useState<Array<venta>>([]);
    const [facturas, setFacturas] = useState<Array<factura>>([]);
    const [empleados, setEmpleados] = useState<Array<list_empleados>>([]);
    const [servicios, setServicios] = useState<Array<list_servicios>>([]);


    useEffect(() => {
        const q = query(collection(db, 'empleados'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let todosArr: any[] = [];
            querySnapshot.forEach((doc) => {
                todosArr.push({ ...doc.data(), id: doc.id });
            });
            setEmpleados(todosArr)
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const q = query(collection(db, 'servicios'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let todosArr: any[] = [];
            querySnapshot.forEach((doc) => {
                todosArr.push({ ...doc.data(), id: doc.id });
            });
            setServicios(todosArr)
        });
        return () => unsubscribe();
    }, []);
    const onChangeDateStart = (e: any) => {
        const fecha = new Date(e.target.value + " 00:00:00")
        setFechaInicio(Number(fecha))

    }
    const onChangeDateEnd = (e: any) => {
        const fecha = new Date(e.target.value + " 23:59:59")
        setFechaFin(Number(fecha))

    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const facturasRef = await query(collection(db, 'facturas'), where('fecha', '>=', fechaInicio), where('fecha', '<=', fechaFin))
        const unsubscribe = await onSnapshot(facturasRef, (querySnapshot) => {
            let todosArr: any[] = [];
            let datos: any[] = [];
            querySnapshot.forEach((doc) => {
                todosArr.push(doc.id);
                datos.push({ ...doc.data(), id: doc.id});
            });
            setDatos(datos)
            setFacturas(todosArr)
            handleVentas(todosArr)
        });
        return () => { unsubscribe(); }
    }

    const handleVentas = async(todosArr: any) => {
        console.log(todosArr)

        const ventasRef = await query(collection(db, 'ventas'), where('facturaID', 'in', todosArr))
        const unsubscribe = await onSnapshot(ventasRef, (querySnapshot) => {
            let todosArr: any[] = [];
            querySnapshot.forEach((doc) => {
                todosArr.push({ ...doc.data(), id: doc.id });
            });
            console.log(todosArr)
            setVentas(todosArr)
        });

        return () => { unsubscribe(); }
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
                        <label className="form-check-label m-2" >Profesional</label>
                        <select>
                            <option> Todos </option>
                            {empleados.map((empleado, index) => {
                                return (

                                    <option key={index}> {empleado.nombre + ' '+ empleado.apellido} </option>
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
                            <th>Profesional</th>
                            <th>Servicio</th>
                            <th>Precio</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {ventas.map((venta, index) => {
                            let nombre = empleados.find(empleado =>  empleado.id === venta.empleadoId)?.nombre
                            let nombreServicio = servicios.find(servicio => servicio.id  === venta.servicioID)?.nombre
                            let fechaNumber = datos?.find(dato => dato.id === venta.facturaID).fecha
                            
                            let fecha2 =new Date(fechaNumber).toLocaleDateString()
                            
                            return (
                                <tr key={index}>
                                    <th>{index+1}</th>
                                    <th>{fecha2}</th>
                                    <th>{nombre}</th>
                                    <th>{nombreServicio}</th>
                                    <th>{venta.precio}</th>
                                </tr>
                            )
                        }
                        )



                        }
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><strong>Total :</strong></td>
                            <td> <strong>${ }</strong> </td>
                        </tr>

                    </tbody>
                </table>

            </div>


        </div >
    )
}
import Carrito from "./Carrito";
import FormVentas from "./FormVentas";
import { useEffect, useState } from "react"
import { db } from '../../firebase'
import {
    query,
    collection,
    onSnapshot,
    updateDoc,
    doc,
    addDoc,
    deleteDoc
} from 'firebase/firestore'

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
interface resumen {
    empleaadoId: string,
    servicioId: string,
    precio: number,
    nombreServicio: string
}

export default function Ventas() {

    const [empleados, setEmpleados] = useState<Array<list_empleados>>([]);
    const [servicios, setServicios] = useState<Array<list_servicios>>([]);
    const [resumen, setResumen] = useState<resumen>({
        empleaadoId: '',
        servicioId: '',
        precio: 0,
        nombreServicio: ''
    });
    const [resumenes, setResumenes] = useState<Array<resumen>>([]);

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

    useEffect(() => {
        if(resumen.servicioId !==''){
            setResumenes([...resumenes, resumen])
        }
        
    }, [resumen]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-lg-4 order-md-last">

                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Resumen de compra</span>
                        <span className="badge bg-primary rounded-pill">3</span>
                    </h4>
                    <Carrito resumenes={resumenes} />

                </div>

                <div className="col-md-7 col-lg-8 card">
                    <h4 className="mt-3">Datos del cliente</h4>
                    <FormVentas empleados={empleados} servicios={servicios} setResumen={setResumen} />
                </div>

            </div>
            <div className="row">
                <div className="col-md-12">
                    resumen
                </div>

            </div>
        </div>
    )
}
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

interface resumen {
    empleaadoId: string,
    servicioId: string,
    precio: number,
    nombreServicio: string,
    nombreEmpleado: string
}

interface Props {
    resumenes: Array<resumen>,
    setResumenes: React.Dispatch<React.SetStateAction<resumen[]>>
}

function Carrito({ resumenes,setResumenes }: Props) {
    const [total, setTotal] = useState(0)
    useEffect(() => {
        let suma = 0
        for (let i = 0; i < resumenes.length; i++) suma += Number(resumenes[i].precio);
        setTotal(suma)
    }, [resumenes]);

    const crearFactura = async (resumenes: resumen[]) => {
        if (resumenes.length < 1) {
            alert('Por favor valide la informacion');
            return;
        }
        let id = ''
        await addDoc(collection(db, 'facturas'), {
            total: total,
            medioPago: 'efectivo',
            fecha: Date.now()
        }).then(docRef => {
         id = docRef.id    
        })
        resumenes.map((resumen ,index ) =>  addDoc(collection(db, 'ventas'), {
            empleadoId: resumen.empleaadoId,
            facturaID: id,
            precio: resumen.precio,
            servicioID: resumen.servicioId
        }))

    };


    const hadlesubmit = (e: any) => {
        e.preventDefault()
        crearFactura(resumenes)
        setResumenes([])
        
    }
    return (
        <form onSubmit={hadlesubmit}>
            <ul className="list-group mb-3">
                {resumenes.map((resumen, index) => {
                    return (
                        <li key={index} className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0">{resumen.nombreServicio}</h6>
                                <small className="text-body-secondary">{resumen.nombreEmpleado}</small>
                            </div>
                            <span className="text-body-secondary">${resumen.precio}</span>
                        </li>
                    )
                })}
                <li className="list-group-item d-flex justify-content-between">
                    <span>Total (COL)</span>
                    <strong>${total}</strong>
                </li>
            </ul>
            <div className="input-group">
                <button type="submit" className="btn btn-secondary">Pagar</button>
            </div>
        </form >
    );
}

export default Carrito;
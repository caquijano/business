import { useEffect, useState } from "react";
import $ from 'jquery';
import { getValue } from "@testing-library/user-event/dist/utils";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
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


interface Props {
    empleados: Array<{
        id: string,
        nombre: string,
        apellido: string,
        utilidad: number,
        celular: string,
    }>,
    servicios: Array<{
        id: string,
        nombre: string,
        descripcion: string,
        precio: number
    }>,
    setResumen: React.Dispatch<React.SetStateAction<{
        empleaadoId: string,
        servicioId: string,
        precio: number,
        nombreServicio: string
    }>>,
}

export default function FormVentas({ empleados, servicios, setResumen }: Props) {
    const [precio, setPrecio] = useState(0);
    const [inputValues, setInputValues] = useState<resumen>({
        empleaadoId: '',
        servicioId: '',
        precio: 0,
        nombreServicio: ''
    });

    const capturaId = () => {
        var empleadoId = $('#empleado').find(':selected').attr('value')
        var id2 = $('#servicio').find(':selected').attr('value')
        var servicio = servicios.filter(servicio => servicio.id === id2)[0]
        var { nombre, precio, id } = servicio
        if (empleadoId && id) {
            setInputValues({
                empleaadoId: String(empleadoId),
                servicioId: id,
                precio: precio,
                nombreServicio: nombre
            })
        }
        if (id) {
            setPrecio(servicios.filter(servicio => servicio.id === id)[0].precio)
        }



    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setResumen(resumen => (inputValues))

    }



    return (
        <form className="needs-validation" onSubmit={handleSubmit}>
            <div className="row g-3">
                <div className="col-sm-6">
                    <label className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" id="" />
                    <div className="invalid-feedback">
                        Nombre es requerido
                    </div>
                </div>

                <div className="col-sm-6">
                    <label className="form-label">Celular</label>
                    <input type="text" className="form-control" id="lastName" placeholder="" />
                    <div className="invalid-feedback">
                        Numero de telefono invalido
                    </div>
                </div>

                <div className="col-12 mt-0">
                    <label className="form-label">Email <span className="text-body-secondary">(Opcional)</span></label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                    <div className="invalid-feedback">
                        Por favor ingrese un correo valido
                    </div>
                </div>
                <h4 className="mt-4">Add Servicio</h4>
                <div className="row col-12 mt-0">
                    <div className="col-md-4 mt-0">
                        <label className="form-label">Servicio</label>
                        <select className="form-select" id="servicio" onChange={capturaId} >
                            <option >Seleccione...</option>{
                                servicios.map((elemento, index) => {
                                    return (
                                        <option key={index} value={elemento.id}>{elemento.nombre} </option>
                                    )
                                })
                            }
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid country.
                        </div>
                    </div>

                    <div className="col-md-3  mt-0">
                        <label className="form-label">Profesional</label>
                        <select className="form-select" id="empleado" onChange={capturaId}>
                            <option value="">Seleccione...</option>{
                                empleados.map((elemento, index) => {
                                    return (
                                        <option key={index} value={elemento.id}>{elemento.nombre + ' ' + elemento.apellido} </option>
                                    )
                                })
                            }


                        </select>
                        <div className="invalid-feedback">
                            Please provide a valid state.
                        </div>
                    </div>

                    <div className="col-md-2  mt-0">
                        <label className="form-label">Precio</label>
                        <input value={precio} type="number" className="form-control" step={1000} />
                        <div className="invalid-feedback">
                            Zip code required.
                        </div>
                    </div>
                    <div className="col-1 mt-0">

                    </div>
                    <div className="col-md-1 mt-0">
                        <label className="form-label row">Add</label>
                        <button className="btn btn-dark row"> + </button>
                    </div>

                </div>

            </div>


        </form>);
}

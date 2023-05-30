import { useEffect, useState } from "react";

interface list_servicios {
    id: string,
    nombre: string,
    descripcion: string,
    precio: number
}
interface Props {
    nuevoServicio: React.Dispatch<React.SetStateAction<list_servicios[]>>,
    servicio: list_servicios,
    editar: boolean,
    setEditar: React.Dispatch<React.SetStateAction<boolean>>,
    crearServicio: Function,
    editarServicio: Function
}


export default function FormServicios({ nuevoServicio, servicio, editar, setEditar, crearServicio, editarServicio }: Props) {

    const [inputValues, setInputValues] = useState<list_servicios>({
        id: servicio.id,
        nombre: '',
        descripcion: '',
        precio: 0
    });

    useEffect(() => {
        setInputValues(servicio)
    }, [servicio])

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (editar) {
            editarServicio(inputValues)
            setEditar(editar => (false))
        } else {
            if (servicio.nombre === '') {
                nuevoServicio(servicios => ([...servicios, inputValues]))
                crearServicio(inputValues)
            }
        }
    }

    const handleChange = (e: any) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <input onChange={handleChange} type='number' name='id' placeholder="id" value={inputValues.id} hidden />
                    <div className="col-sm-3 my-1">
                        <label className="sr-only" >Nombre</label>
                        <input onChange={handleChange} type='text' name='nombre' placeholder="Nombre" value={inputValues.nombre} />
                    </div>
                    <div className="col-sm-4 my-1">
                        <label className="sr-only row" >Descripción</label>
                        <textarea className="row" onChange={handleChange} name='descripcion' placeholder="Descripción" value={inputValues.descripcion} style={{width: '100%'}} />
                    </div>
                    <div className="col-sm-3 my-1">
                        <label className="sr-only" >Precio</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">$</div>
                            </div>
                            <input className="form-control" onChange={handleChange} type='number' name='precio' placeholder="Precio" value={inputValues.precio} />
                        </div>
                    </div>

                    <div className="col-sm-1 my-auto">
                        {editar ? <button className="botton-form"> Editar</button> : <button className="botton-guardar"> Guardar</button>}
                    </div>
                </div>

            </form >
        </div >
    )

}
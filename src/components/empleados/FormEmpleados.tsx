import { useEffect, useState } from "react";

interface list_empleados {
    id: string,
    nombre: string,
    apellido: string,
    utilidad: number,
    celular: string,
}
interface Props {
    nuevoEmpleado: React.Dispatch<React.SetStateAction<list_empleados[]>>,
    empleado: list_empleados,
    editar: boolean,
    setEditar: React.Dispatch<React.SetStateAction<boolean>>,
    crearEmpleado: Function,
    editarEmpleado: Function
}


export default function FormEmpleados({ nuevoEmpleado, empleado, editar, setEditar, crearEmpleado,editarEmpleado }: Props) {

    const [inputValues, setInputValues] = useState<list_empleados>({
        id: empleado.id,
        nombre: '',
        apellido: '',
        utilidad: 50,
        celular: ''
    });

    useEffect(() => {
        setInputValues(empleado)
    }, [empleado])

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (editar) {
            editarEmpleado(inputValues)
            setEditar(editar => (false))
        } else {
            if (empleado.nombre === '') {
                nuevoEmpleado(empleados => ([...empleados, inputValues]))
                crearEmpleado(inputValues)
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
            <form onSubmit={handleSubmit} className="form-row">
                <div className="row">
                    <div className="col">
                        <input onChange={handleChange} type='number' name='id' placeholder="id" value={inputValues.id} hidden />
                    </div>
                    <div className="col">
                        <input onChange={handleChange} type='text' name='nombre' placeholder="Nombre" value={inputValues.nombre} />
                    </div>
                    <div className="col">
                        <input onChange={handleChange} type='text' name='apellido' placeholder="Apellido" value={inputValues.apellido} />
                    </div>
                    <div className="col">
                        <input onChange={handleChange} type='number' name='utilidad' placeholder="utilidad" value={inputValues.utilidad} />
                    </div>
                    <div className="col">
                        <input onChange={handleChange} type='number' name='celular' placeholder="Celular" value={inputValues.celular} />  
                    </div>
                    <div className="col">
                        {editar ? <button> Editar</button> : <button> Guardar</button>}
                    </div>
                </div>
            </form>
        </div>
    )

}
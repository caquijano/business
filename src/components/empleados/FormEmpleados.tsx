import { useEffect, useState } from "react";

interface list_empleados {
    id: number,
    nombre: string,
    apellido: string,
    utilidad: number,
    celular: string,
}
interface Props {
    nuevoEmpleado: React.Dispatch<React.SetStateAction<list_empleados[]>>,
    empleado: list_empleados,
    editar: boolean,
    setEditar2: React.Dispatch<React.SetStateAction<boolean>>,

}


export default function FormEmpleados({ nuevoEmpleado, empleado, editar, setEditar2 }: Props) {

    const [inputValues, setInputValues] = useState<list_empleados>({
        id: empleado.id,
        nombre: '',
        apellido: '',
        utilidad: 50,
        celular: 'Celular'
    });

    useEffect(() => {
        setInputValues(empleado)
    }, [empleado])


    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (editar) {
          nuevoEmpleado(empleados => (empleados))
        } else {
            nuevoEmpleado(empleados => ([...empleados, inputValues]))
        }

    }

    const handleChange = (e: any) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='number' name='id' placeholder="Nombre" value={inputValues.id} />
                <input onChange={handleChange} type='text' name='nombre' placeholder="Nombre" value={inputValues.nombre} />
                <input onChange={handleChange} type='text' name='apellido' placeholder="Apellido" value={inputValues.apellido} />
                <input onChange={handleChange} type='number' name='utilidad' placeholder="utilidad" value={inputValues.utilidad} />
                <input onChange={handleChange} type='number' name='Celular' placeholder="Celular" value={inputValues.celular} />
                {editar ? <button> Editar</button> : <button> Guardar</button>}
            </form>
        </div>
    )

}
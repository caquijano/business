
interface list_empleados {
    id: number,
    nombre: string,
    apellido: string,
    utilidad: number,
    celular: string,
}
interface Props {
    empleados: Array<{
        id: number,
        nombre: string,
        apellido: string,
        utilidad: number,
        celular: string,
    }>,
    editarEmpleado: React.Dispatch<React.SetStateAction<list_empleados>>,
    setEditar2:React.Dispatch<React.SetStateAction<boolean>>
}

export default function ListaEmpleados({empleados,editarEmpleado,setEditar2}:Props) {
    const editarEmp = (e:any) =>{
        editarEmpleado(empleado => (empleados[e.target.value]))
        setEditar2(editar => (true))
    }
    return (<table>
        <thead>
            <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Utilidad</th>
                <th>Celular</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {
                empleados.map(empleado => {
                    return (
                        <tr>
                            <td>{empleado.id}</td>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.apellido}</td>
                            <td>{empleado.utilidad}</td>
                            <td> {empleado.celular}</td>
                            <td > <button  onClick={editarEmp} value={empleado.id-1} >Editar</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>)
}
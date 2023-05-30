
interface list_empleados {
    id: string,
    nombre: string,
    apellido: string,
    utilidad: number,
    celular: string,
}
interface Props {
    empleados: Array<{
        id: string,
        nombre: string,
        apellido: string,
        utilidad: number,
        celular: string,
    }>,
    setEmpleado: React.Dispatch<React.SetStateAction<list_empleados>>,
    setEditar:React.Dispatch<React.SetStateAction<boolean>>,
}

export default function ListaEmpleados({empleados,setEmpleado,setEditar}:Props) {
    console.log(empleados);
    const editarEmp = (e:any) =>{
        const result:list_empleados[] = empleados.filter(empleado => empleado.id == e.target.value)
        setEmpleado(empleado => (result[0]))
        setEditar(editar => (true))
    }
    return (<table className="table table-hover">
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
                empleados.map((empleado , index) => {
                    if(empleado.id !== '') {
                    return (
                        <tr key={empleado.id}>
                            <td scope="col" >{index+1}</td>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.apellido}</td>
                            <td>{empleado.utilidad}</td>
                            <td> {empleado.celular}</td>
                            <td > <button  onClick={editarEmp} value={empleado.id} >Editar</button></td>
                        </tr>
                    )
                }})
            }
        </tbody>
    </table>)
}
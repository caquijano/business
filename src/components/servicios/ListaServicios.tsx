
interface list_servicios {
    id: string,
    nombre: string,
    descripcion: string,
    precio: number
}
interface Props {
    servicios: Array<{
        id: string,
        nombre: string,
        descripcion: string,
        precio: number
    }>,
    setServicio: React.Dispatch<React.SetStateAction<list_servicios>>,
    setEditar: React.Dispatch<React.SetStateAction<boolean>>,
}
const formateador = new Intl.NumberFormat('es-ES');

export default function ListaServicios({ servicios, setServicio, setEditar }: Props) {
    const editarEmp = (e: any) => {
        const result: list_servicios[] = servicios.filter(servicio => servicio.id == e.target.value)
        setServicio(servicio => (result[0]))
        setEditar(editar => (true))
    }
    return (<table className="table table-hover overflow-x" style={{alignItems:'center'}}>
        <thead>
            <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody >
            {
                servicios.map((servicio, index) => {
                    if (servicio.id !== '') {
                        return (
                            <tr key={servicio.id}>
                                <td scope="col" >{index + 1}</td>
                                <td>{servicio.nombre}</td>
                                <td>{servicio.descripcion}</td>
                                <td  >${formateador.format(servicio.precio)}</td>
                                <td > <button onClick={editarEmp} value={servicio.id} >Editar</button></td>
                            </tr>
                        )
                    }
                })
            }
        </tbody>
    </table>)
}




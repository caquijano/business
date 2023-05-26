import { useState, useEffect } from 'react'
import FormEmpleados from './FormEmpleados'

interface list_empleados {
  id: number,
  nombre: string,
  apellido: string,
  utilidad: number,
  celular: string,
}
const list_inicial = [{
  id: 1,
  nombre: "Karent",
  apellido: "Ibarra",
  utilidad: 50,
  celular: "3228884443"
}, {
  id: 2,
  nombre: "Laura",
  apellido: "Mora",
  utilidad: 55,
  celular: "3228884443"

}, {
  id: 3,
  nombre: "Laura",
  apellido: "Mora",
  utilidad: 40,
  celular: "3228884443"
}, {
  id: 4,
  nombre: "Laura",
  apellido: "Mora",
  utilidad: 60,
  celular: "3228884443"
}

]
export default function Empleados() {
  const [empleados, setEmpleados] = useState<Array<list_empleados>>([])
  
  useEffect(() => {
    setEmpleados(list_inicial)
  }, [])

  return (
    <div className="ListaEmpleados">
      <h1>LISTA DE EMPLEADOS</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Utilidad</th>
            <th>Celular</th>
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
                  <td>Editar</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <FormEmpleados/>

    </div>

  )
}

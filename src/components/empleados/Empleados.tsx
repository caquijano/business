import { useState, useEffect } from 'react'
import FormEmpleados from './FormEmpleados'
import ListaEmpleados from './ListEmpleados'

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
  nombre: "luisa",
  apellido: "claro",
  utilidad: 40,
  celular: "3228884443"
}, {
  id: 4,
  nombre: "mary",
  apellido: "muñuz",
  utilidad: 60,
  celular: "3228884443"
}

]
export default function Empleados() {
  const [empleados, setEmpleados] = useState<Array<list_empleados>>(list_inicial)
  const [editar, setEditar] = useState<boolean>(false)
  const [empleado,setEmpleado] = useState<list_empleados>({
    id: empleados.length+1,
    nombre: '',
    apellido: '',
    utilidad: 0,
    celular: 'Celular'
});
  
  useEffect(() => {
    setEmpleados(list_inicial)

  }, [])

  useEffect(() => {
    setEmpleado(empleado)
    
    console.log(empleado);
  },[empleado])

  return (
    <div className="form-empleados">
      <FormEmpleados nuevoEmpleado={setEmpleados} empleado={empleado} editar={editar} setEditar2={setEditar} />
      <h2 style={{display: 'flex', margin: '20px'}}>LISTA DE EMPLEADOS</h2>
      <ListaEmpleados editarEmpleado={setEmpleado} empleados={empleados} setEditar2={setEditar} />
      
    </div>

  )
}

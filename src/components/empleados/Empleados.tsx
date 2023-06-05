import { useState, useEffect } from 'react'
import { db } from '../../firebase'
import FormEmpleados from './FormEmpleados'
import ListaEmpleados from './ListEmpleados'
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc
} from 'firebase/firestore'

interface list_empleados {
  id: string,
  nombre: string,
  apellido: string,
  utilidad: number,
  celular: string,
}

export default function Empleados() {
  const lista_vacia:list_empleados= {
    id: '',
    nombre: '',
    apellido: '',
    utilidad: 50,
    celular: ''
  }
  const [empleados, setEmpleados] = useState<Array<list_empleados>>([])
  const [editar, setEditar] = useState<boolean>(false)
  const [empleado, setEmpleado] = useState<list_empleados>(lista_vacia);

  const crearEmpleado = async (empleado: list_empleados) => {
    if (empleado.nombre === '') {
      alert('Por favor valide la informacion');
      return;
    }
    await addDoc(collection(db, 'empleados'), {
      nombre: empleado.nombre,
      apellido: empleado.apellido,
      utilidad: empleado.utilidad,
      celular: empleado.celular
    });
    setEmpleado(lista_vacia)
  };
  const editarEmpleado = async (empleado: list_empleados) => {
    if (empleado.id === '') {
      alert('Por favor valide la informacion');
      return;
    }
    await updateDoc(doc(db, 'empleados', empleado.id), {
      nombre: empleado.nombre,
      apellido: empleado.apellido,
      utilidad: empleado.utilidad,
      celular: empleado.celular
    });
    setEmpleado(lista_vacia)
  }


  useEffect(() => {
    const q = query(collection(db, 'empleados'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr: any[] = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setEmpleados(todosArr)
    });
    return () => unsubscribe();
  }, [])

  useEffect(() => {
    setEmpleado(empleado)
  }, [empleado])

  return (
    <div className="form-empleados">
      <FormEmpleados nuevoEmpleado={setEmpleados} empleado={empleado} editar={editar} setEditar={setEditar} crearEmpleado={crearEmpleado} editarEmpleado={editarEmpleado} />
      <h2 style={{ display: 'flex', margin: '20px' }}>LISTA DE EMPLEADOS</h2>
      <ListaEmpleados  setEmpleado={setEmpleado} empleados={empleados} setEditar={setEditar} />
    </div>

  )
}

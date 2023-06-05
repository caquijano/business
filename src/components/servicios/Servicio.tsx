import { useState, useEffect } from 'react'
import { db } from '../../firebase'
import FormServicios from './FormServicios'
import ListaServicios from './ListaServicios'
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc
} from 'firebase/firestore'


interface list_servicios {
  id: string,
  nombre: string,
  descripcion: string,
  precio: number
}

export default function Servicios() {
  const lista_vacia:list_servicios= {
    id: '',
    nombre: '',
    descripcion: '',
    precio: 1000
  }
  const [servicios, setServicios] = useState<Array<list_servicios>>([])
  const [editar, setEditar] = useState<boolean>(false)
  const [servicio, setServicio] = useState<list_servicios>(lista_vacia);

  const crearServicio = async (servicio: list_servicios) => {
    if (servicio.nombre === '') {
      alert('Por favor valide la informacion');
      return;
    }
    await addDoc(collection(db, 'servicios'), {
      nombre: servicio.nombre,
      descripcion: servicio.descripcion,
      precio: servicio.precio,
    });
    setServicio(lista_vacia)
  };
  const editarServicio = async (servicio: list_servicios) => {
   
    if (servicio.id === '') {
      alert('Por favor valide la informacion');
      return;
    }
    await updateDoc(doc(db, 'servicios', servicio.id), {
      nombre: servicio.nombre,
      descripcion: servicio.descripcion,
      precio: servicio.precio
    });
    setServicio(lista_vacia)
  }


  useEffect(() => {
    const q = query(collection(db, 'servicios'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr: any[] = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setServicios(todosArr)
    });
    return () => unsubscribe();
  }, [])

  useEffect(() => {
    setServicio(servicio)
  }, [servicio])

  return (
    <div className="form-empleados">
      <FormServicios nuevoServicio={setServicios} servicio={servicio} editar={editar} setEditar={setEditar} crearServicio={crearServicio} editarServicio={editarServicio} />
      <h2 style={{ display: 'flex', margin: '20px' }}> LISTA DE SERVICIOS </h2>
      <ListaServicios  setServicio={setServicio} servicios={servicios} setEditar={setEditar} />
    </div>

  )
}

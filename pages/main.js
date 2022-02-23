import Footer from "../components/footer.component"
import MenuNavegacion from "../components/menu_navegacion.component"
import ListaProyectos from "../components/lista_proyectos.component"
import ProyectoModal from "../components/proyecto_modal.component"
import { useEffect, useState } from "react"


const MainPage = () => {

  // CODIGO PARA PROYECTO MODAL INICIO
  const [seDebeMostrar, setSeDebeMostrar] = useState(false)
  const seDebeMostrarOnClick = () => {
    setModoFormulario('nuevo')
    setSeDebeMostrar(!seDebeMostrar)
  }
  const [modoFormulario, setModoFormulario] = useState('nuevo') //modo nuevo y edicion
  // CODIGO PARA PROYECTO MODAL FIN


  // CODIGO PARA LISTA PROYECTOS INICIO
  const [listaDeProyectos, setListaDeProyectos] = useState([])
  const eliminarProyectoHandler = async(id) => {
    const resp = await fetch(`/api/proyectos/${id}`,{
      method:"DELETE"
    })
    const data = await resp.json()
    if(data.msg=="metodo delete [id]"){
      await actualizarProyectos()
    }
  }
  const actualizarProyectos = async() => {
    const responseProj = await fetch("/api/proyectos")
    const dataProj = await responseProj.json()
    setListaDeProyectos(dataProj.proyectos)
  }
  // CODIGO PARA LISTA PROYECTOS FIN


  //CODIGO UTILIZADO POR LISTAPROYECTOS Y PROYECTOMODAL INICIO
  const guardarProyectoHandler = async(nombreProyecto, usuario, rating) => {
    const proyecto = {
      nombre: nombreProyecto,
      usuario: usuario,
      rating: rating
    }
    const resp = await fetch('/api/proyectos',{
      method: "POST",
      body: JSON.stringify(proyecto)
    })
    const data = await resp.json()
    if(data.msg ==""){
      setSeDebeMostrar(false)
      await actualizarProyectos()
    }
  }
  const editarProyectoHandler = (id) => {
    setModoFormulario('edicion')
    setSeDebeMostrar(true)
  }
  useEffect(() => {
    const fetchUseEffect = async () => {
      //api/proyectos
      await actualizarProyectos()
    }
    fetchUseEffect()
  }, [])
  //CODIGO UTILIZADO POR LISTAPROYECTOS Y PROYECTOMODAL FIN


  return (
    <div>
      <h1>Main Page</h1>
      <MenuNavegacion />
      <div className="mt-4">
        <button className="btn btn-primary" onClick={seDebeMostrarOnClick}>Nuevo</button>
      </div>
      <ListaProyectos
        proyectos={listaDeProyectos}
        modo="crud"
        onEliminarProyecto={eliminarProyectoHandler}
        onEditarProyecto={editarProyectoHandler}
      />
      <Footer />
      {/* ESPACIO PARA EL MODAL */}
      <ProyectoModal
        mostrar={seDebeMostrar}
        ocultar={seDebeMostrarOnClick}
        onGuardarProyecto={guardarProyectoHandler}
        modo={modoFormulario}
      />
    </div>
  )
}

export default MainPage
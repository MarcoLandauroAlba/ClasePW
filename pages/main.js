import Footer from "../components/footer.component"
import MenuNavegacion from "../components/menu_navegacion.component"
import ListaProyectos from "../components/lista_proyectos.component"
import ProyectoModal from "../components/proyecto_modal.component"
import { useEffect, useState } from "react"
import { eliminarProyectoId,guardarProyectos, obtenerProyectos } from "../dao/proyectos"


const MainPage = () => {

  // CODIGO PARA PROYECTO MODAL INICIO
  const [seDebeMostrar, setSeDebeMostrar]  = useState(false)
  const seDebeMostrarOnClick = () => {
    setModoFormulario('nuevo')
    setSeDebeMostrar(!seDebeMostrar)
  }
  const [modoFormulario, setModoFormulario] = useState('nuevo') //modo nuevo y edicion
  // CODIGO PARA PROYECTO MODAL FIN


  // CODIGO PARA LISTA PROYECTOS INICIO
  const [listaDeProyectos, setListaDeProyectos] = useState([])
  const eliminarProyectoHandler = (id) => {
    eliminarProyectoId(id)
    setListaDeProyectos(obtenerProyectos)
  }
  // CODIGO PARA LISTA PROYECTOS FIN


  //CODIGO UTILIZADO POR LISTAPROYECTOS Y PROYECTOMODAL INICIO
  const guardarProyectoHandler = (nombreProyecto, usuario, rating) => {
    setSeDebeMostrar(false)
    guardarProyectos(nombreProyecto,usuario,rating)
    setListaDeProyectos(obtenerProyectos())
  }
  const editarProyectoHandler = (id) => {
    setModoFormulario('edicion')
    setSeDebeMostrar(true)
  }
  useEffect(()=>{
    setListaDeProyectos(obtenerProyectos())
  },[])
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
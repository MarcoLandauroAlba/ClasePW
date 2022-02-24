import Footer from "../components/footer.component"
import MenuNavegacion from "../components/menu_navegacion.component"
import ListaProyectos from "../components/lista_proyectos.component"
import ProyectoModal from "../components/proyecto_modal.component"
import { useEffect, useState } from "react"


const MainPage = () => {

  const [seDebeMostrar, setSeDebeMostrar] = useState(false)
  const [modoFormulario, setModoFormulario] = useState('nuevo') //modo nuevo y edicion
  const [completoProyecto, setCompletoProyecto] = useState(null)
  const [listaDeProyectos, setListaDeProyectos] = useState([])

  // FUNCIONES EXCLUSIVAS DE LISTA PROYECTOS
  
  const eliminarProyectoHandler = async(id) => {
    const resp = await fetch(`/api/proyectos/${id}`,{
      method:"DELETE"
    })
    const data = await resp.json()
    if(data.msg=="metodo delete [id]"){
      await actualizarProyectos()
    }
  }
  
  const editarProyectoHandler = async(id) => {
    console.log("entro a editar proyecto: ", id)
    const resp = await fetch(`/api/proyectos/${id}`)
    const data = await resp.json()
    setCompletoProyecto(data.proyecto)              //PRIMERO SE ACTUALIZA EL PROYECTO INTERNO
    setModoFormulario('edicion')                    //LUEGO SE ACTUALIZA EL MODO A EDICION
    setSeDebeMostrar(true)                          //AL FINAL SE MUESTRA EL MODAL
  }



  
  // FUNCIONES DE PROYECTO MODAL
  const seDebeMostrarOnClick = () => {
    console.log('CREANDO UN NUEV PROYECTO: MAIN:seDebeMostrarOnClick()')
    setCompletoProyecto(null)                       //PRIMERO SE ACTUALIZA EL PROYECTO INTERNO
    setModoFormulario('nuevo')                      //LUEGO SE ACTUALIZA EL MODO A EDICION
    setSeDebeMostrar(!seDebeMostrar)    //SE CAMBIA EL ESTADO DEL MODAL SEGUN EL LUGAR DE UTILIZACION
  }

  const guardarProyectoHandler = async(nombreProyecto, idUsuario, rating) => {
    const proyecto = {
      nombre: nombreProyecto,
      idUsuario: idUsuario,
      rating: rating
    }
    const resp = await fetch('/api/proyectos',{
      method: "POST",
      body: JSON.stringify(proyecto)
    })
    const data = await resp.json()
    if(data.msg =="se posteo un proyecto"){
      setSeDebeMostrar(false)
      await actualizarProyectos()
    }
    setModoFormulario('nuevo')
  }

  const actualizarProyectoHandler = async(id, nombreProyecto, idUsuario, rating) => {
    const proyecto = {
      id: id,
      nombre: nombreProyecto,
      idUsuario: idUsuario,
      rating: rating
    }
    const resp = await fetch('/api/proyectos',{
      method: "PUT",
      body: JSON.stringify(proyecto)
    })
    const data = await resp.json()
    if(data.msg =="metodo put"){
      setSeDebeMostrar(false)
      await actualizarProyectos()
    }
    setModoFormulario('nuevo')
  }

  

  
  
  
  useEffect(() => {
    const fetchUseEffect = async () => {
      //api/proyectos
      await actualizarProyectos()
    }
    fetchUseEffect()
  }, [])

  const actualizarProyectos = async() => {
    const responseProj = await fetch("/api/proyectos")
    const dataProj = await responseProj.json()
    if(dataProj.msg=="PETICION GET"){
      setListaDeProyectos(dataProj.proyectos)
    }
  }



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
        proyecto={completoProyecto}
        onActualizarProyecto={actualizarProyectoHandler}
      />
    </div>
  )
}

export default MainPage
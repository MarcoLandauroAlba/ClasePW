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
  const [listaDeUsuarios, setListaDeUsuarios] = useState([])
  const [listadoTecnologias, setListadoTecnologias] = useState([])

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
    const resp = await fetch(`/api/proyectos/${id}`)
    const data = await resp.json()
    setCompletoProyecto(data.proyecto)              //PRIMERO SE ACTUALIZA EL PROYECTO INTERNO
    setModoFormulario('edicion')                    //LUEGO SE ACTUALIZA EL MODO A EDICION
    setSeDebeMostrar(true)                          //AL FINAL SE MUESTRA EL MODAL
  }



  
  // FUNCIONES DE PROYECTO MODAL
  const seDebeMostrarOnClick = () => {
    setCompletoProyecto(null)                       //PRIMERO SE ACTUALIZA EL PROYECTO INTERNO
    setModoFormulario('nuevo')                      //LUEGO SE ACTUALIZA EL MODO A EDICION
    setSeDebeMostrar(!seDebeMostrar)    //SE CAMBIA EL ESTADO DEL MODAL SEGUN EL LUGAR DE UTILIZACION
  }

  const guardarProyectoHandler = async(nombreProyecto, idUsuario, rating, listaTecnologias) => {
    const proyecto = {
      nombre: nombreProyecto,
      idUsuario: idUsuario,
      rating: rating,
      tecnologias: listaTecnologias
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

  const actualizarProyectoHandler = async(id, nombreProyecto, idUsuario, rating, listaTecnologias) => {
    const proyecto = {
      id: id,
      nombre: nombreProyecto,
      idUsuario: idUsuario,
      rating: rating,
      tecnologias: listaTecnologias
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
      //api/tecnologias
      await descargarTecnologias()
      //api/usuarios
      await actualizarUsuarios()
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
  const actualizarUsuarios = async() => {
    const responseUsua = await fetch('/api/usuarios')
    const dataUsua = await responseUsua.json()
    if(dataUsua.msg=="PETICION GET"){
      setListaDeUsuarios(dataUsua.usuarios)
    }
  }
  const descargarTecnologias = async() => {
    const responseTec = await fetch('/api/tecnologias')
    const dataTec = await responseTec.json()
    if(dataTec.msg=="respuesta TEC GET"){
      setListadoTecnologias(dataTec.tecnologias)
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
        /*usuarios={listaDeUsuarios}*/
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
        usuarios={listaDeUsuarios}
        tecnologias={listadoTecnologias}
      />
    </div>
  )
}

export default MainPage
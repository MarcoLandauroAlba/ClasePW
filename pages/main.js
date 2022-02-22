import Footer from "../components/footer.component"
import MenuNavegacion from "../components/menu_navegacion.component"
import ListaProyectos from "../components/lista_proyectos.component"
import ProyectoModal from "../components/proyecto_modal.component"
import { useEffect, useState } from "react"


const MainPage = () => {

  // CODIGO PARA PROYECTO MODAL INICIO
  const [seDebeMostrar, setSeDebeMostrar] = useState(false)
  const seDebeMostrarOnClick = () => {
    setSeDebeMostrar(!seDebeMostrar)
  }
  const guardarProyectoHandler = (nombreProyecto, usuario, rating) => {
    console.log("va a encargarse de guardar xd")
    console.log(nombreProyecto)
    console.log(usuario)
    console.log(rating)
    setSeDebeMostrar(false)
  }
  // CODIGO PARA PROYECTO MODAL FIN

  return (
    <div>
      <h1>Main Page</h1>
      <MenuNavegacion />
      <div className="mt-4">
        <button className="btn btn-primary" onClick={seDebeMostrarOnClick}>Nuevo</button>
      </div>
      <ListaProyectos proyectos={[]} />
      <Footer />
      {/* ESPACIO PARA EL MODAL */}
      <ProyectoModal mostrar={seDebeMostrar} ocultar={seDebeMostrarOnClick} onGuardarProyecto={guardarProyectoHandler}/>
    </div>
  )
}

export default MainPage
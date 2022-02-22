import { useEffect, useState } from "react"
import Banner from "../components/banner.component"
import Footer from "../components/footer.component"
import FormularioLogin from "../components/formulario_login.component"
import ListaProyectos from "../components/lista_proyectos.component"
import MenuNavegacion from "../components/menu_navegacion.component"

const Home = () => {

  // CODIGO PARA LISTA PROYECTOS INICIO
  const [listadoDeProyectos, setListadoDeProyectos] = useState([])

  // CODIGO PARA LISTA PROYECTOS FIN

  // CODIGO PARA BANNER INICIO
  const [listadoDeImagenes, setListadoDeImagenes] = useState([])
  // CODIGO PARA BANNER FIN

  //USEEFFECT COMPARTIDO PARA BANNER Y LISTA PROYECTOS INICIO =====
  useEffect(() => {
    const fetchUseEffect = async () => {
      //api/proyectos
      const responseProj = await fetch("/api/proyectos")
      const dataProj = await responseProj.json()
      setListadoDeProyectos(dataProj.proyectos)
      //api/imagenes
      const responseImg = await fetch("/api/imagenes")
      const dataImg = await responseImg.json()
      setListadoDeImagenes(dataImg.images)
    }
    fetchUseEffect()
  }, [])
  //USEEFFECT COMPARTIDO PARA BANNER Y LISTA PROYECTOS FIN =====

  // CODIGO PARA FORMULARIO INICIO
  const [errorLogin, setErrorLogin] = useState(false)

  const loginHandler = (user, password) => {
    if (user == "billy" && password == "123") {
      location.href = "/main"
    } else {
      console.log("Error en login")
      setErrorLogin(true)
    }
  }
  // CODIGO PARA FORMULARIO FIN

  return (
    <div>
      <header>
        <h1>Mi Portafolio</h1>
      </header>
      <MenuNavegacion />
      <div className="mt-4">
        <Banner imagenes={listadoDeImagenes}/>
        <div className="row mt-4">
          <ListaProyectos proyectos={listadoDeProyectos} modo="lista" />
          <FormularioLogin onLogin={loginHandler} error={errorLogin} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
import Banner from "../components/banner.component"
import Footer from "../components/footer.component"
import FormularioLogin from "../components/formulario_login.component"
import ListaProyectos from "../components/lista_proyectos.component"
import MenuNavegacion from "../components/menu_navegacion.component"

const Home = () => {

  // CODIGO PARA LISTA PROYECTOS INICIO
  const listadoDeProyectos = [
    {nombre : "P1", usuario: 'u1', puntaje: 1.1},
    {nombre : "P2", usuario: 'u2', puntaje: 1.2},
    {nombre : "P3", usuario: 'u3', puntaje: 1.3},
    {nombre : "P4", usuario: 'u4', puntaje: 1.4}
  ]
  // CODIGO PARA LISTA PROYECTOS FIN

  return (
    <div>
      <header>
        <h1>Mi Portafolio</h1>
      </header>
      <MenuNavegacion />
      <div className="mt-4">
        <Banner />
        <div className="row mt-4">
          <ListaProyectos proyectos={ listadoDeProyectos }/>
          <FormularioLogin />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
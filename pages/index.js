import Banner from "../components/banner.component"
import Footer from "../components/footer.component"
import FormularioLogin from "../components/formulario_login.component"
import ListaProyectos from "../components/lista_proyectos.component"
import MenuNavegacion from "../components/menu_navegacion.component"

const Home = () => {
  return (
    <div>
      <header>
        <h1>Mi Portafolio</h1>
      </header>
      <MenuNavegacion />
      <div className="mt-4">
        <Banner />
        <div className="row mt-4">
          <ListaProyectos />
          <FormularioLogin />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
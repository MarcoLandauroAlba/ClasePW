import { useState } from "react"

const ListaProyectos = (props) => {

  const [seDebeMostrar, setSeDebeMostrar] = useState(true)

  const btnCambiarEstadoOnClick = () => {
    setSeDebeMostrar(!seDebeMostrar)
  }

  //MODOS -> LISTA | CRUD
  if (props.modo == 'lista') {
    if (seDebeMostrar) {
      return (
        <main className="col-md-8">
          <h3>Ranking</h3>
          <button type="button" className="btn btn-danger" onClick={btnCambiarEstadoOnClick}>Ocultar</button>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Nombre Proyecto</th>
                  <th>Usuario</th>
                  <th>Puntaje</th>
                </tr>
              </thead>
              <tbody id="data_proyectos">
                {
                  props.proyectos.map((element, index) => {
                    return (
                      <tr key={element.id}>
                        <td>{element.nombre}</td>
                        <td>{element.idUsuario}</td>
                        <td>{element.rating}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </main>
      )
    } else {
      return (
        <main className="col-md-8">
          <h3>Ranking</h3>
          <button type="button" className="btn btn-success" onClick={btnCambiarEstadoOnClick}>Mostrar</button>
        </main>
      )
    }
  } else {
    return (
      <main className="col-md-8">
        <h3>Ranking</h3>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Nombre Proyecto</th>
                <th>Usuario</th>
                <th>Puntaje</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="data_proyectos">
              {
                props.proyectos.map((element, index) => {
                  console.log('element.idUsuario->',element.idUsuario)
                  return (
                    <tr key={element.id}>
                      <td>{element.nombre}</td>
                      <td>{element.idUsuario}</td>
                      <td>{element.rating}</td>
                      <td>
                        <button 
                          className="btn btn-link"
                          onClick={() => {props.onEditarProyecto(element.id)}}>
                          Editar
                        </button>
                        <button 
                          className="btn btn-danger" 
                          onClick={()=>{props.onEliminarProyecto(element.id)}}>
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </main>
    )
  }


}
export default ListaProyectos
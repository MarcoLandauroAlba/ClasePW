import { useEffect, useState } from "react"

const ListaProyectos = (props) => {

  const [seDebeMostrar, setSeDebeMostrar] = useState(true)

  const btnCambiarEstadoOnClick = () => {
    setSeDebeMostrar(!seDebeMostrar)
  }

  if(seDebeMostrar){
    return (
      <main className="col-md-8">
        <h3>Ranking</h3>
        <button type="button" className="btn btn-danger" onClick={btnCambiarEstadoOnClick}>Ocultar</button>
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
              props.proyectos.map((element,index)=>{
                return (
                  <tr key={element.id}>
                    <td>{element.nombre}</td>
                    <td>{element.usuario}</td>
                    <td>{element.rating}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </main>
    )
  }else{
    return (
      <main className="col-md-8">
        <h3>Ranking</h3>
        <button type="button" className="btn btn-success" onClick={btnCambiarEstadoOnClick}>Mostrar</button>
      </main>
    )
  }

}
export default ListaProyectos
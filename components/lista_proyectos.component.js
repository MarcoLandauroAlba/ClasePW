const ListaProyectos = (props) => {
  return (
    <main className="col-md-8">
      <h3>Ranking</h3>
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
                <tr key={index}>
                  <td>{element.nombre}</td>
                  <td>{element.usuario}</td>
                  <td>{element.puntaje}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </main>
  )
}
export default ListaProyectos
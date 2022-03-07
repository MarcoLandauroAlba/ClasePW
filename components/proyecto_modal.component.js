import { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"

const ProyectoModal = (props) => {

  const [idOpcional, setIdOpcional] = useState(null)
  const [txtNombreProyecto, setTxtNombreProyecto] = useState('')
  const [txtIdUsuario, setTxtIdUsuario] = useState(0)
  const [txtRating, setTxtRating] = useState(0)
  const [listaIdTecnologiasSeleccionadas, setListaIdTecnologiasSeleccionadas] = useState([])

  const txtNombreProyectoOnChange = (event) => {
    setTxtNombreProyecto(event.target.value)
  }
  const setTxtIdUsuarioOnChange = (event) => {
    setTxtIdUsuario(event.target.value)
  }
  const setTxtRatingOnChange = (event) => {
    setTxtRating(event.target.value)
  }
  const setListaTecnologiasSeleccionadasOnChange = (event) => {
    const listaIds = Array.from(event.target.selectedOptions).map((valor) => { return parseInt(valor.value) })
    setListaIdTecnologiasSeleccionadas(listaIds)
  }

  const guardarOnClick = () => {
    if (txtIdUsuario != 0) {
      if (props.modo == "nuevo") {
        props.onGuardarProyecto(txtNombreProyecto, txtIdUsuario, txtRating, listaIdTecnologiasSeleccionadas)
      } else {
        props.onActualizarProyecto(idOpcional, txtNombreProyecto, txtIdUsuario, txtRating, listaIdTecnologiasSeleccionadas)
      }
      borrarDatos()
    } else {
      //nothing happens cz the user hasn't selected a father user
    }
  }

  useEffect(() => {
    if (props.modo == 'nuevo') {
      borrarDatos()
    } else {
      if(props.proyecto!=null){
        setIdOpcional(props.proyecto.id)
        setTxtNombreProyecto(props.proyecto.nombre)
        setTxtIdUsuario(props.proyecto.idUsuario)
        setTxtRating(props.proyecto.rating)
        setListaIdTecnologiasSeleccionadas(props.proyecto.tecnologias)
        console.log('props.proyecto.tecnologias',props.proyecto.tecnologias)
      }
    }
  }, [props.modo, props.proyecto])

  const borrarDatos = () => {
    setIdOpcional(null)
    setTxtNombreProyecto('')
    setTxtIdUsuario(0)
    setTxtRating(0)
    setListaIdTecnologiasSeleccionadas([])
  }

  return (
    <Modal show={props.mostrar} onHide={props.ocultar}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <div>
            <label className="form-label my-1">Nombre de Proyecto</label>
            <input
              className="form-control"
              type="text"
              defaultValue={txtNombreProyecto}
              onChange={txtNombreProyectoOnChange}
            />
          </div>
          <div>
            <label className="form-label my-1">Usuario</label>
            <select className="form-select" defaultValue={txtIdUsuario} onChange={setTxtIdUsuarioOnChange}>
              <option value={0}>---------SELECCIONE UNA OPCION---------</option>
              {
                props.usuarios.map((usuario) => {
                  return (
                    <option
                      key={usuario.id}
                      value={usuario.id}
                    >
                      {usuario.username}
                    </option>
                  )
                })
              }
            </select>
          </div>
          <div>
            <label className="form-label my-1">Rating</label>
            <input
              className="form-control"
              type="number"
              defaultValue={txtRating}
              onChange={setTxtRatingOnChange}
            />
          </div>
          <div>
            <label className="form-label my-1">Tecnologias</label>
            <select value={listaIdTecnologiasSeleccionadas} multiple className="form-select" onChange={setListaTecnologiasSeleccionadasOnChange}>
              {
                props.tecnologias.map((tecnito) => {
                  return (
                    <option value={tecnito.id} key={tecnito.id}>
                      {tecnito.nombre}
                    </option>
                  )
                })
              }
            </select>
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Cerrar</Button>
        <Button variant="primary" onClick={guardarOnClick}>Guardar</Button>
      </Modal.Footer>
    </Modal>
  )
}
export default ProyectoModal
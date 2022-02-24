import { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"

const ProyectoModal = (props) => {

  const [idOpcional, setIdOpcional] = useState(null)
  const [txtNombreProyecto, setTxtNombreProyecto] = useState('')
  const [txtIdUsuario, setTxtIdUsuario] = useState('')
  const [txtRating, setTxtRating] = useState(0)

  const txtNombreProyectoOnChange = (event) => {
    setTxtNombreProyecto(event.target.value)
  }
  const setTxtIdUsuarioOnChange = (event) => {
    setTxtIdUsuario(event.target.value)
  }
  const setTxtRatingOnChange = (event) => {
    setTxtRating(event.target.value)
  }

  const guardarOnClick = () => {
    if (props.modo == "nuevo") {
      props.onGuardarProyecto(txtNombreProyecto, txtIdUsuario, txtRating)
    } else {
      props.onActualizarProyecto(idOpcional, txtNombreProyecto, txtIdUsuario, txtRating)
    }
  }

  useEffect(() => {
    console.log('modo de muestra ->', props.modo)
    if (props.modo == 'nuevo') {
      setIdOpcional(null)
      setTxtNombreProyecto('')
      setTxtIdUsuario('')
      setTxtRating(0)
    } else {
      setIdOpcional(props.proyecto.id)
      setTxtNombreProyecto(props.proyecto.nombre)
      setTxtIdUsuario(props.proyecto.idUsuario)
      setTxtRating(props.proyecto.rating)
    }
  }, [props.modo])

  return (
    <Modal show={props.mostrar} onHide={props.ocultar}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <div>
            <label className="form-label my-1">Nombre de Proyecto</label>
            <input className="form-control" type="text" defaultValue={txtNombreProyecto} onChange={txtNombreProyectoOnChange} />
          </div>
          <div>
            <label className="form-label my-1">Usuario</label>
            <input className="form-control" type="text" defaultValue={txtIdUsuario} onChange={setTxtIdUsuarioOnChange} />
          </div>
          <div>
            <label className="form-label my-1">Rating</label>
            <input className="form-control" type="number" defaultValue={txtRating} onChange={setTxtRatingOnChange} />
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
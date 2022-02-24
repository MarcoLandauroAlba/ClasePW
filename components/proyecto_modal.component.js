import { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"

const ProyectoModal = (props) => {

  const [idOpcional, setIdOpcional] = useState(null)
  const [txtNombreProyecto, setTxtNombreProyecto] = useState('')
  const [txtIdUsuario, setTxtIdUsuario] = useState(0)
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
    if(txtIdUsuario!=0){
      if (props.modo == "nuevo") {
        props.onGuardarProyecto(txtNombreProyecto, txtIdUsuario, txtRating)
      } else {
        props.onActualizarProyecto(idOpcional, txtNombreProyecto, txtIdUsuario, txtRating)
      }
      borrarDatos()
    }else{
      //nothing happens cz the user hasn't selected a father user
    }
  }

  useEffect(() => {
    console.log('modo de muestra ->', props.modo)
    if (props.modo == 'nuevo') {
      borrarDatos()
    } else {
      setIdOpcional(props.proyecto.id)
      setTxtNombreProyecto(props.proyecto.nombre)
      setTxtIdUsuario(props.proyecto.idUsuario)
      setTxtRating(props.proyecto.rating)
    }
  }, [props.modo])

  const borrarDatos = () => {
    setIdOpcional(null)
    setTxtNombreProyecto('') 
    setTxtIdUsuario(0)
    setTxtRating(0)
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
                props.usuarios.map((usuario)=>{
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
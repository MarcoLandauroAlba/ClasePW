import { useState } from "react"

const FormularioLogin = (props) => {

  const [txtUsername, setTxtUsername] = useState('')
  const [txtPassword, setTxtPassword] = useState('')

  const txtUsernameOnChange = (event) => {
    setTxtUsername(event.target.value)
  }
  const txtPasswordOnChange = (event) => {
    setTxtPassword(event.target.value)
  }
  
  const btnLoginOnClick = () => {
    props.onLogin(txtUsername,txtPassword)
  }

  return (
    <aside className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h3>Login</h3>
          <form>
            <div>
              <label htmlFor="txt_username" className="form-label">Username</label>
              <input 
                id="txt_username" 
                type="text" 
                className="form-control" 
                defaultValue={ txtUsername }
                onChange={txtUsernameOnChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="txt_password" className="form-label">Password</label>
              <input 
                id="txt_password" 
                type="password" 
                className="form-control" 
                defaultValue={ txtPassword }
                onChange={txtPasswordOnChange}
              />
            </div>
            <button 
              id="butLogin" 
              className="btn btn-primary" 
              type="button"
              onClick={btnLoginOnClick}
            >
              Login
            </button>
            <a href="#">Registro</a>
          </form>
          {
            props.error?<div className="alert alert-danger mt-2">Error en Login</div>:<></>
          }
          {/* ESTO ES LO MISMO QUE LA FUNCION DE ARRIBA
            (()=>{
              if(props.error)
                return <div className="alert alert-danger mt-2">Error en Login</div>
            })() 
            */
          }
        </div>
      </div>
    </aside>
  )
}
export default FormularioLogin
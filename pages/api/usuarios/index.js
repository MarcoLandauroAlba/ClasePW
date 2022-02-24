import { obtenerUsuarios } from "../../../dao/usuarios"

const usuariosHandler = async (req, res) => {
  if(req.method=='GET'){
    const usuarios = await obtenerUsuarios()
    usuarios.map
    res.json({
      msg:"PETICION GET",
      usuarios: usuarios
    })
  }else{
    res.status(400).json({
      msg: "error en api/usuarios/index"
    })
  }
}
export default usuariosHandler
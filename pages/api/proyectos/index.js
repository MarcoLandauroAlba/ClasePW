import { guardarProyectos, obtenerProyectos, modificarProyecto } from "../../../dao/proyectos"
import { obtenerUsuario } from "../../../dao/usuarios"

const proyectosHandler = async(req, res) => {
  if(req.method=="GET"){
    const proyectos = await obtenerProyectos()
    const proyectosConUsername = []
    for(let proyectito of proyectos){
      const usuario = await obtenerUsuario(proyectito.idUsuario)
      proyectosConUsername.push({
        id:proyectito.id,
        nombre:proyectito.nombre,
        idUsuario: proyectito.idUsuario,
        usuario: usuario.username,
        rating: proyectito.rating,
        createdAt: proyectito.createdAt,
        updatedAt: proyectito.updatedAt
      })
    }
    res.json({
      msg: "PETICION GET",
      proyectos: proyectosConUsername
    })
  }else if(req.method=="POST"){
    const data = req.body
    const dataParse = JSON.parse(data)
    await guardarProyectos(dataParse.nombre, dataParse.idUsuario, dataParse.rating, dataParse.tecnologias)

    res.json({
      msg: "se posteo un proyecto"
    })
  }else if(req.method=="PUT"){
    const data = req.body
    const dataParse = JSON.parse(data)
    await modificarProyecto(dataParse)
    res.json({
      msg:"metodo put",
    })
  }else{
    res.status(400).json({
      msg: "Error, metodo no disponible"
    })
  }
}
export default proyectosHandler
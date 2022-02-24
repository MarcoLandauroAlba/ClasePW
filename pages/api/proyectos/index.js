import { guardarProyectos, obtenerProyectos, modificarProyecto } from "../../../dao/proyectos"

const proyectosHandler = async(req, res) => {
  if(req.method=="GET"){
    const proyectos = await obtenerProyectos()
    res.json({
      msg: "PETICION GET",
      proyectos: proyectos
    })
  }else if(req.method=="POST"){
    const data = req.body
    const dataParse = JSON.parse(data)
    await guardarProyectos(dataParse.nombre, dataParse.idUsuario, dataParse.rating)
    res.json({
      msg: "se posteo un proyecto"
    })
  }else if(req.method=="PUT"){
    const data = req.body
    console.log('data->',data)
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
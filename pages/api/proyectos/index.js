import { guardarProyectos, obtenerProyectos } from "../../../dao/proyectos"

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
    await guardarProyectos(dataParse.nombre, "usuario en duro", dataParse.rating)
    res.json({
      msg: ""
    })
  }else{
    res.status(400).json({
      msg: "Error, metodo no disponible"
    })
  }
}
export default proyectosHandler
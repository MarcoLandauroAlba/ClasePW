import { eliminarProyectoId, obtenerProyectoId } from "../../../../dao/proyectos"

const proyectosIdHandler = async(req, res) => {
  if(req.method=="DELETE"){
    const data = req.query
    await eliminarProyectoId(data.id)
    res.json({
      msg: "metodo delete [id]",
      id: data.id
    })
  }else if(req.method=="GET"){
    const data = req.query
    const proyecto = await obtenerProyectoId(data.id)
    res.json({
      msg:"metodo get [id]",
      proyecto:proyecto
    })
  }else{
    res.status(400).json({
      msg: "Error, metodo no disponible"
    })
  }
}
export default proyectosIdHandler
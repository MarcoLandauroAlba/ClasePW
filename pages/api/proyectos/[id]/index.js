import { eliminarProyectoId } from "../../../../dao/proyectos"

const proyectosIdHandler = async(req, res) => {
  if(req.method=="DELETE"){
    const data = req.query
    console.log("se eliminara el proyecto con id " + data.id)
    await eliminarProyectoId(data.id)
    res.json({
      msg: "metodo delete [id]",
      id: data.id
    })
  }else{
    res.status(400).json({
      msg: "Error, metodo no disponible"
    })
  }
}
export default proyectosIdHandler
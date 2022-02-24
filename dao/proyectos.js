const db = require("../sequelize/models")

const guardarProyectos = async (nombreProyecto, usuario, rating) => {
  //INSERCION =================================
  const proyectoGuardado = await db.Proyecto.create({
    nombre: nombreProyecto,
    rating: rating
  })
}
const obtenerProyectos = async () => {
  //QUERY =====================================
  const proyectos = await db.Proyecto.findAll({
    order: [
      ["id","ASC"]
    ]
  })
  return proyectos
}
const eliminarProyectoId = async(id) => {
  //DELETE ====================================
  const respuesta = await db.Proyecto.destroy({
    where:{
      id:id
    }
  })
}
const obtenerProyectoId = async(id) => {
  //QUERY =====================================
  const proyecto = await db.Proyecto.findOne({
    where: {
      id:id
    }
  })
  return proyecto
}
const modificarProyecto = async(proyecto) => {
  const proyectoModificar = await obtenerProyectoId(proyecto.id)
  proyectoModificar.nombre=proyecto.nombre
  proyectoModificar.rating=proyecto.rating
  // ACTUALIZAMOS PROYECTO EN LA BD
  await proyectoModificar.save()
}
export { guardarProyectos, obtenerProyectos, eliminarProyectoId, obtenerProyectoId, modificarProyecto }
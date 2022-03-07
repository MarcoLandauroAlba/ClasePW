const db = require("../sequelize/models")

const guardarProyectos = async (nombreProyecto, idUsuario, rating, tecnologias) => {
  //INSERCION =================================
  const proyectoGuardado = await db.Proyecto.create({
    nombre: nombreProyecto,
    idUsuario: idUsuario,
    rating: rating
  })
  // REGISTRO DE DATOS EN LA TABLA INTERMEDIA
  for(let idTecnologia of tecnologias){
    await db.ProyectoXTecnologia.create({
      idProyecto: proyectoGuardado.id,
      idTecnologia: idTecnologia
    })
  }
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
  await db.ProyectoXTecnologia.destroy({
    where:{
      idProyecto: id
    }
  })
  await db.Proyecto.destroy({
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
  const proyXtecnos = await db.ProyectoXTecnologia.findAll({
    where: {
      idProyecto:id
    }
  })
  const tecnologias = []
  for(let proy of proyXtecnos){
    tecnologias.push(proy.dataValues.idTecnologia)
  }
  proyecto.dataValues.tecnologias = tecnologias
  return proyecto
}
const modificarProyecto = async(proyecto) => {

  await db.ProyectoXTecnologia.destroy({
    where: {
      idProyecto: proyecto.id
    }
  })
  for(let idTecnologia of proyecto.tecnologias){
    await db.ProyectoXTecnologia.create({
      idProyecto: proyecto.id,
      idTecnologia: idTecnologia
    })
  }

  const proyectoModificar = await obtenerProyectoId(proyecto.id)
  proyectoModificar.nombre=proyecto.nombre
  proyectoModificar.idUsuario=proyecto.idUsuario
  proyectoModificar.rating=proyecto.rating
  // ACTUALIZAMOS PROYECTO EN LA BD
  await proyectoModificar.save()

}
export { guardarProyectos, obtenerProyectos, eliminarProyectoId, obtenerProyectoId, modificarProyecto }
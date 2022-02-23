const db = require("../sequelize/models")

const guardarProyectos = async (nombreProyecto, usuario, rating) => {
  //INSERCION =================================
  const proyectoGuardado = await db.Proyecto.create({
    nombre: nombreProyecto,
    rating: rating
  })
  
  return proyectoGuardado
}
const obtenerProyectos = async () => {
  //QUERY =====================================
  const proyectos = await db.Proyecto.findAll()
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
const obtenerProyectoId = (id) => {
  // const proyectosStr = localStorage.getItem("proyectos")
  // const proyectosParse = JSON.parse(proyectosStr)
  // for (let proyectito of proyectosParse) {
  //   if (proyectito.id == id) {
  //     return proyectito
  //   }
  // }
  // return null
}
const modificarProyecto = (proyecto) => {
  // let proyectosStr = localStorage.getItem("proyectos")
  // const proyectosParse = JSON.parse(proyectosStr)
  // for (let proyectito of proyectosParse) {
  //   if (proyectito.id == proyecto.id) {
  //     proyectito.nombre = proyecto.nombre
  //     proyectito.usuario = proyecto.usuario
  //     proyectito.rating = proyecto.rating
  //     break
  //   }
  // }
  // proyectosStr = JSON.stringify(proyectosParse)
  // localStorage.setItem('proyectos', proyectosStr)

}
export { guardarProyectos, obtenerProyectos, eliminarProyectoId, obtenerProyectoId, modificarProyecto }
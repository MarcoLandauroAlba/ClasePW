const guardarProyectos = (nombreProyecto, usuario, rating) => {
  const proyectito = {
    nombre: nombreProyecto,
    usuario: usuario,
    rating: rating
  }
  let proyectosStr = localStorage.getItem("proyectos")
  const proyectosParse = JSON.parse(proyectosStr)

  if(proyectosParse==null){
    proyectito.id = 1
    const proyectitoStr = JSON.stringify([proyectito])
    localStorage.setItem('proyectos',proyectitoStr)
  }else{
    if(proyectosParse.length>0){
      const lastId = proyectosParse[proyectosParse.length - 1].id
      proyectito.id = lastId+1
      proyectosParse.push(proyectito)
      proyectosStr = JSON.stringify(proyectosParse)
      localStorage.setItem('proyectos',proyectosStr)
    }else{
      proyectito.id = 1
      const proyectitoStr = JSON.stringify([proyectito])
      localStorage.setItem('proyectos',proyectitoStr)
    }
  }
}
const obtenerProyectos = () => {
  const proyectosStr = localStorage.getItem("proyectos")
  const proyectosParse = JSON.parse(proyectosStr)
  if(proyectosParse==null || proyectosParse==[]){
    return []
  }else{
    return proyectosParse
  }
}
const eliminarProyectoId = (id) => {
  let proyectosStr = localStorage.getItem("proyectos")
  const proyectosParse = JSON.parse(proyectosStr)
  for(let i = 0; i<proyectosParse.length; i++){
    if(proyectosParse[i].id == id){
      proyectosParse.splice(i,1)
      break
    }
  }
  proyectosStr = JSON.stringify(proyectosParse)
  localStorage.setItem('proyectos',proyectosStr)
}
const obtenerProyectoId = (id) => {
  const proyectosStr = localStorage.getItem("proyectos")
  const proyectosParse = JSON.parse(proyectosStr)
  for(let proyectito of proyectosParse){
    if(proyectito.id == id){
      return proyectito
    }
  }
  return null
}
const modificarProyecto = (proyecto) => {
  let proyectosStr = localStorage.getItem("proyectos")
  const proyectosParse = JSON.parse(proyectosStr)
  for(let proyectito of proyectosParse){
    if(proyectito.id == proyecto.id){
      proyectito.nombre = proyecto.nombre
      proyectito.usuario = proyecto.usuario
      proyectito.rating = proyecto.rating
      break
    }
  }
  proyectosStr = JSON.stringify(proyectosParse)
  localStorage.setItem('proyectos',proyectosStr)
}
export { guardarProyectos,obtenerProyectos,eliminarProyectoId,obtenerProyectoId,modificarProyecto }
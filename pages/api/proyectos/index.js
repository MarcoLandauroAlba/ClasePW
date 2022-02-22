const proyectosHandler = (req, res) => {
  if(req.method=="GET"){
    const proyectos = [
      {
        id: 1,
        nombre: "PA",
        usuario: 'UA',
        rating: 4.1
      },
      {
        id: 2,
        nombre: "PB",
        usuario: 'UB',
        rating: 4.2
      }
    ]
    res.json({
      proyectos: proyectos,
      msg: ""
    })
  }else{
    res.status(400).json({
      msg: "Error, metodo no disponible"
    })
  }
}
export default proyectosHandler
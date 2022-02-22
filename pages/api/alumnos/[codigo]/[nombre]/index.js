//Endpoint o servicio
  //path: link/esto es lo que importa
  //method: [GET, POST]
    //POST: podemos enviar data en el cuerpo de la peticion
    //GET: la data la enviamos por la url
const alumnoHandler = (req,res) => {
  if(req.method=="GET"){
    console.log(req.query.codigo)
    res.json({
      msg:[
        `${req.query.codigo}`,
        `${req.query.nombre}`
      ]
    })
  }else if(req.method=="POST"){
    res.json({
      msg:"respuesta por get"
    })
  }else{
    res.json({
      msg:"respuesta por cualquier otro"
    })
  }
}
export default alumnoHandler
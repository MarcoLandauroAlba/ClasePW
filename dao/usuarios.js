const db = require("../sequelize/models")

const obtenerUsuarios = async () => {
  return await db.Usuario.findAll({
    order:[
      ['id','ASC']
    ]
  })
}
const obtenerUsuario = async (id) =>{
  return await db.Usuario.findOne({
    where:{
      id:id
    }
  })
}

export {obtenerUsuarios,obtenerUsuario}
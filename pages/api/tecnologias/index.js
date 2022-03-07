import { obtenerTecnologias } from "../../../dao/tecnologias"

const tecnologiasHandler = async(req, res) => {
  if(req.method=='GET'){
    const tecnologias = await obtenerTecnologias()
    res.json({
      msg: "respuesta TEC GET",
      tecnologias: tecnologias
    })
  }else{
    res.status(400).json({
      msg:"error fatal xd"
    })
  }
}

export default tecnologiasHandler
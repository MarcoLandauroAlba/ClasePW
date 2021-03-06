'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proyecto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Proyecto.belongsTo(models.Usuario,{
        foreignKey:{
          name: "idUsuario"
        }
      })
    }
  }
  Proyecto.init({
    nombre: DataTypes.STRING,
    idUsuario: DataTypes.INTEGER,
    rating: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Proyecto',
    freezeTableName : true
  });
  return Proyecto;
};
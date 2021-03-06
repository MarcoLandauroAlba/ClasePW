'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
const basename = 'index.js';
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};


const models = process.cwd() + '/sequelize/models/' || __dirname;

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });
const model = require("../models/proyecto")
const modelUsuario = require('../models/usuario')
const modelTecnologia = require('../models/tecnologia')
const modelProXTec = require('../models/proyectoxtecnologia')

db[model(sequelize, Sequelize.DataTypes).name] = model(sequelize, Sequelize.DataTypes);
db[modelUsuario(sequelize, Sequelize.DataTypes).name] = modelUsuario(sequelize, Sequelize.DataTypes);
db[modelTecnologia(sequelize, Sequelize.DataTypes).name] = modelTecnologia(sequelize, Sequelize.DataTypes);
db[modelProXTec(sequelize, Sequelize.DataTypes).name] = modelProXTec(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// : 1645591380:0;npx sequelize init
// : 1645591747:0;npx sequelize db:create
// : 1645592035:0;npx sequelize model:generate --name Proyecto --attributes nombre:string,rating:float
// : 1645619926:0;npx sequelize db:migrate
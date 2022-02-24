'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    // CREAMOS NUEVA COLUMNA EN TABLA PROYECTO (idUsuario)
    await queryInterface.addColumn('Proyecto', 'idUsuario', {
      type: Sequelize.INTEGER,
      allowNull: true
    })

    // AGREGAR EL CONSTRAINT DE FOREIGN KEY
    await queryInterface.addConstraint('Proyecto',{
      type:"FOREIGN KEY",
      fields: ['idUsuario'],
      references:{
        table: 'Usuario',
        field: 'id'
      },
      name: 'FK_PROYECTO_USUARIO'
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Proyecto','FK_PROYECTO_USUARIO');
    await queryInterface.removeColumn('Proyecto','idUsuario')
    await queryInterface.dropTable('Usuario');
  }
};
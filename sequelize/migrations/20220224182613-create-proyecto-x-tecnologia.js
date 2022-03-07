'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProyectoXTecnologia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idProyecto: {
        type: Sequelize.INTEGER
      },
      idTecnologia: {
        type: Sequelize.INTEGER
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
    await queryInterface.addConstraint('ProyectoXTecnologia',{
      type:'FOREIGN KEY',
      name: "FK_PROYECTOXTECNOLOGIA_PROYECTO",
      fields: ['idProyecto'],
      references:{
        table:'Proyecto',
        field:'id'
      }
    })
    await queryInterface.addConstraint('ProyectoXTecnologia',{
      type:'FOREIGN KEY',
      name: "FK_PROYECTOXTECNOLOGIA_TECNOLOGIA",
      fields: ['idTecnologia'],
      references:{
        table:'Tecnologia',
        field:'id'
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('ProyectoXTecnologia','idProyecto')
    await queryInterface.removeConstraint('ProyectoXTecnologia','idTecnologia')
    await queryInterface.dropTable('ProyectoXTecnologia');
  }
};
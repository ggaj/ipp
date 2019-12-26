module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('familygroups', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      leader_id: {
        type: Sequelize.INTEGER,
        references: { model: 'members', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      coleader_id: {
        type: Sequelize.INTEGER,
        references: { model: 'members', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      host_id: {
        type: Sequelize.INTEGER,
        references: { model: 'members', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      member_id: {
        type: Sequelize.INTEGER,
        references: { model: 'members', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('familygroups');
  },
};

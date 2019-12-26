import Sequelize, { Model } from 'sequelize';

class FamilyGroup extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Member, { foreignKey: 'leader_id', as: 'leader' });
    this.belongsTo(models.Member, {
      foreignKey: 'coleader_id',
      as: 'co_leader',
    });
    this.belongsTo(models.Member, { foreignKey: 'host_id', as: 'host' });
    this.hasMany(models.Member, { foreignKey: 'member_id', as: 'member' });
  }
}

export default FamilyGroup;

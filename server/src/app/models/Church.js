import Sequelize, { Model } from 'sequelize';

class Church extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cep: Sequelize.STRING,
        address: Sequelize.STRING,
        number: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        information: Sequelize.STRING,
        reference: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Church;

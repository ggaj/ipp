import Sequelize, { Model } from 'sequelize';

class Member extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cpf: Sequelize.STRING,
        telefone: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Member;

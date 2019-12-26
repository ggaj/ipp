import * as Yup from 'yup';

import Church from '../models/Church';

class ChurchController {
  async index(req, res) {
    const church = await Church.findAll();
    return res.json(church);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { id, name } = await Church.create(req.body);
    return res.json({
      id,
      name,
    });
  }
}

export default new ChurchController();

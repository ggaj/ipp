import * as Yup from 'yup';

import FamilyGroup from '../models/FamilyGroup';

class FamilyGroupController {
  async index(req, res) {
    const family_group = await FamilyGroup.findAll();
    res.json(family_group);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { id, name } = await FamilyGroup.create(req.body);
    return res.json({
      id,
      name,
    });
  }
}

export default new FamilyGroupController();

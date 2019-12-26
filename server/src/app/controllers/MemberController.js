import * as Yup from 'yup';

import Member from '../models/Member';

class MemberController {
  async index(req, res) {
    const member = await Member.findAll();
    res.json(member);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { id, name } = await Member.create(req.body);
    return res.json({
      id,
      name,
    });
  }
}

export default new MemberController();

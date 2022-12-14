import { Request, Response } from 'express';

import { hashSync } from 'bcrypt';

import { User } from '../../models';

export const user = {
  controller: {
    addOne: async (req: Request, res: Response) => {
      const { email, password } = req.body;
      const user = { email, password: hashSync(password, 8) };
      const newUser = await User.create(user);

      return res.json(newUser);
    },
    getOne: async (req: Request, res: Response) => {
      const { id } = req.params;
      const user = await User.findOne({ where: { id } });

      return res.json(user);
    },
  },
};

import { Request, Response } from 'express';

import { Tag } from '../../models';

export const tag = {
  controller: {
    addOne: async (req: Request, res: Response) => {
      const { name } = req.body;
      const tag = { name };

      const newTag = await Tag.create(tag);

      return res.json(newTag);
    },
  },
};

import { Request, Response } from 'express';

import { Post, User } from '../../models';

export const post = {
  controller: {
    addOne: async (req: Request, res: Response) => {
      const { text, title, user_id } = req.body;
      const post = { text, title, user_id };

      const newPost = await Post.create(post);

      return res.json(newPost);
    },
    getAll: async (_: Request, res: Response) => {
      const posts = await Post.findAll({ include: User });

      return res.json(posts);
    },
  },
};

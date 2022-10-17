import { Request, Response } from 'express';

import { Post, Tag, User } from '../../models';
import { PostTags } from '../../models/PostTags';

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
    tagPost: async (req: Request, res: Response) => {
      const { tag_id, post_id } = req.body;

      const postTags = await PostTags.create({ tag_id, post_id });

      return res.json(postTags);
    },
    getAllPostsWithTag: async (req: Request, res: Response) => {
      const { tag_id } = req.body;

      const postsWithTag = await Post.findByPk(tag_id, { include: Tag });

      return res.json(postsWithTag);
    },
  },
};

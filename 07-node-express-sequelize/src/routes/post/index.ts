import { post } from '../../controllers/post';

export const postRoutes = {
  addOne: {
    method: 'post',
    route: '/posts',
    controller: post.controller.addOne,
  },
  getOne: {
    method: 'get',
    route: '/posts',
    controller: post.controller.getAll,
  },
  tagPost: {
    method: 'post',
    route: '/posts/tag',
    controller: post.controller.tagPost,
  },
  getAllPostsWithTag: {
    method: 'post',
    route: '/posts/tag/filter',
    controller: post.controller.getAllPostsWithTag,
  },
};

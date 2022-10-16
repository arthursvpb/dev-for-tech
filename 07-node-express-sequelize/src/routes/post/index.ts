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
};

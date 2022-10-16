import { user } from '../../controllers/user';

export const userRoutes = {
  addOne: {
    method: 'post',
    route: '/users',
    controller: user.controller.addOne,
  },
};

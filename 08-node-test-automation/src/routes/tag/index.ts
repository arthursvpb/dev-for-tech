import { tag } from '../../controllers/tag';

export const tagRoutes = {
  addOne: {
    method: 'post',
    route: '/tags',
    controller: tag.controller.addOne,
  },
};

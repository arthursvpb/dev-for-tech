import { Router } from 'express';
import { Routes } from './types';

import { userRoutes } from './user';
import { postRoutes } from './post';
import { tagRoutes } from './tag';

const router = Router();

const allRoutes = [userRoutes, postRoutes, tagRoutes /* otherDomainRoutes */];

allRoutes.forEach(routes => {
  Object.values(routes as Routes).forEach(({ method, route, controller }) => {
    router[method](route, controller);
  });
});

export { router };

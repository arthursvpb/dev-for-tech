import { Router } from 'express';
import { Routes } from './types';

import { userRoutes } from './user';
import { postRoutes } from './post';
import { tagRoutes } from './tag';

const router = Router();

export const importAllRoutes = (allRoutesArray: Array<Routes>) =>
  allRoutesArray.forEach(routes => {
    Object.values(routes as Routes).forEach(({ method, route, controller }) => {
      router[method](route, controller);
    });
  });

const allRoutes = [
  userRoutes,
  postRoutes,
  tagRoutes,
  /* otherDomainRoutes */
] as Array<Routes>;

importAllRoutes(allRoutes);

export { router };

import { Router } from 'express';
import { Routes } from './types';

import { userRoutes } from './user';

const router = Router();

const allRoutes = [userRoutes /* otherDomainRoutes */];

allRoutes.forEach(routes => {
  Object.values(routes as Routes).forEach(({ method, route, controller }) => {
    router[method](route, controller);
  });
});

export { router };

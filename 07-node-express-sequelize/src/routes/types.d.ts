export type AllMethods =
  | 'all'
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'patch'
  | 'options'
  | 'head';

export type Route = {
  method: AllMethods;
  route: string;
  controller: RequestHandler;
};

export type Routes = {
  [key: string]: Route;
};

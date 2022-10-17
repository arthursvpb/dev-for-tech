import { components, header } from './config';

import { tags } from './tags';
import { users } from './users';
import { posts } from './posts';

export const apiDocumentation = {
  ...header,
  paths: { ...tags, ...users, ...posts },
  components,
};

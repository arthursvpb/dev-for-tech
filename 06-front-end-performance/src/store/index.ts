import { configureStore } from '@reduxjs/toolkit';

import { usersReducer } from './modules/user/reducer';

export const store = configureStore({ reducer: { users: usersReducer } });

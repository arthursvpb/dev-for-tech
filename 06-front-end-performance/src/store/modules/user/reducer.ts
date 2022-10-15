import { Reducer } from 'redux';

import { Users } from './types';
import { USER_ACTION_TYPES } from './action';

const initialState: Users = {
  users: [],
};

export const usersReducer: Reducer<Users> = (state = initialState, action) => {
  if (action.type === USER_ACTION_TYPES.USER_ADDED) {
    const user = action.payload;

    return {
      ...state,
      users: [...state.users, user],
    };
  }

  return state;
};

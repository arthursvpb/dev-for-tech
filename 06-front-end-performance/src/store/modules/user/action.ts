import { User } from './types';

export enum USER_ACTION_TYPES {
  USER_ADDED = 'user/userAdded',
  USER_REMOVED = 'user/userRemoved',
  USER_EDITED = 'user/userEdited',
}

type UserActionTypes =
  | USER_ACTION_TYPES.USER_ADDED
  | USER_ACTION_TYPES.USER_REMOVED
  | USER_ACTION_TYPES.USER_EDITED;

interface UserAction {
  type: UserActionTypes;
  payload: User;
}

type UserActionCreator = (user: User) => UserAction;

export const addUserCreator: UserActionCreator = user => {
  return {
    type: USER_ACTION_TYPES.USER_ADDED,
    payload: user,
  };
};

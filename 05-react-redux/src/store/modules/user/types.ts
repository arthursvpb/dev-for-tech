export interface User {
  email: string;
  id: number;
}

export interface Users {
  users: User[];
}

export interface UsersState {
  users: {
    users: User[];
  };
}

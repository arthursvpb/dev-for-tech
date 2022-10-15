import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { UsersState } from '../../store/modules/user/types';

export const Private: React.FC = () => {
  const { users } = useSelector((state: UsersState) => state.users);

  return (
    <div>
      <h1>Private</h1>
      {users.map((user, index) => (
        <div key={index}>
          <code>{JSON.stringify(user)}</code>
        </div>
      ))}
      <Link to="/">
        <button>Return</button>
      </Link>
    </div>
  );
};

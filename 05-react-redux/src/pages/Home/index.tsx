import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services';

import { useDispatch } from 'react-redux';
import { addUserCreator } from '../../store/modules/user/action';
import { User } from '../../store/modules/user/types';

import { Container } from './style';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addUser = useCallback(
    (user: User) => dispatch(addUserCreator(user)),
    [dispatch]
  );

  function login() {
    const loginInfo = {
      email: 'arthur@mock.com',
      password: 'password',
    };

    api.post('/login', loginInfo).then(response => {
      const accessToken = JSON.stringify(response.data.accessToken);
      const user = { ...response.data.user };

      localStorage.setItem('@my-service-token', accessToken);

      addUser(user);
      navigate('/private');
    });
  }

  return (
    <Container>
      <h1>Home</h1>
      <button onClick={login}>Autenticar</button>
      <Link to="/public">Public</Link>
      <Link to="/private">Private</Link>
    </Container>
  );
};

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services';

import { Container } from './style';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  function login() {
    api
      .post('/login', {
        email: 'arthur@mock.com',
        password: 'password',
      })
      .then(response => {
        const accessToken = JSON.stringify(response.data.accessToken);

        localStorage.setItem('@my-service-token', accessToken);
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

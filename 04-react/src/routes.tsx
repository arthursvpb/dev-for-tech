// import { Container } from './styles';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Private } from './pages/Private';

import { Home } from './pages/Home';
import { Public } from './pages/Public';

import jwt_decode from 'jwt-decode';

const redirect = () => <Navigate to="/public" replace />;

const PrivateRoute = ({ children }: any) => {
  const token = localStorage.getItem('@my-service-token') || '';

  if (!token) return redirect();

  const { exp }: any = jwt_decode(token);
  const currentDateInSeconds = Date.now() / 1000;
  const expired = currentDateInSeconds > exp;

  if (expired) return redirect();

  return children;
};

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="public" element={<Public />} />
        <Route
          path="private"
          element={
            <PrivateRoute>
              <Private />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

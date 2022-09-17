// import { Container } from './styles';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contact } from './pages/Contact';

import { Home } from './pages/Home';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

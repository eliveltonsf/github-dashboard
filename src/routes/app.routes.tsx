import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
  </Routes>
);

export default AppRoutes;

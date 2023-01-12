import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import RepositoriesPage from '../pages/RepositoriesPage';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/repositories" element={<RepositoriesPage />} />
  </Routes>
);

export default AppRoutes;

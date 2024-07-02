import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dealer/Dashboard/Dashboard';

const DashboardRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/dealer/dashboard" Component={Dashboard} />
    </Routes>
  );
};

export default DashboardRoutes;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Customer/Dashboard/Dashboard';

const DashboardRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/customer/dashboard" Component={Dashboard} />
    </Routes>
  );
};

export default DashboardRoutes;

import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Dealer/Login/Login';
import Register from '../pages/Dealer/Login/Register';
import Dashboard from '../pages/Dealer/Dashboard/Dashboard';

const LoginRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/dealer/login" Component={Login} />
      <Route path="/dealer/register" Component={Register} />
      <Route path="/dealer/dashboard" Component={Dashboard} />
      <Route path="/" element={<Navigate to="/dealer/login" />} />
    </Routes>
  );
};

export default LoginRoutes;

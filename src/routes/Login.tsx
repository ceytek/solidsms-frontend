import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Customer/Login/Login';
import Register from '../pages/Customer/Login/Register';
import Dashboard from '../pages/Customer/Dashboard/Dashboard';

const LoginRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/customer/login" Component={Login} />
      <Route path="/customer/register" Component={Register} />
      <Route path="/customer/dashboard" Component={Dashboard} />
      <Route path="/" element={<Navigate to="/customer/login" />} />
    </Routes>
  );
};

export default LoginRoutes;

// src/App.tsx
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from './pages/Customer/Login/Login';
import Register from './pages/Customer/Login/Register';
import Dashboard from './pages/Customer/Dashboard/Dashboard';
import { Button, Space } from 'antd';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer/login" Component={Login} />
        <Route path="/customer/register" Component={Register} />
        <Route path="/customer/dashboard" Component={Dashboard} />
      </Routes>
    </BrowserRouter>
  );
};
const Home = () => {
  return (
    <div className="container">
    <Space>
      <Link to="/customer/login">
        <Button type="primary">Müşteri Girişi</Button>
      </Link>
      <Link to="/dealer/login">
        <Button type="default">Bayi Girişi</Button>
      </Link>
    </Space>
  </div>
  );
};

export default App;

// src/App.tsx
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import './App.css';
import LoginRoutes from './routes/Login';
import DashboardRoutes from './routes/Dashboard';

import { Button, Space } from 'antd';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" Component={LoginRoutes } />
        <Route path="/*" Component={DashboardRoutes} />
        
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

// src/pages/Customer/Login/CustomerLogin.tsx
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import './Login.css'; // Stil dosyasını import ediyoruz

const CustomerLogin: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='user-bg'>
    <div className="login-container">
      <h2 className="login-title">Sisteme Giriş</h2>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Mail" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Şifre"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Beni Hatırla</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Şifremi Unuttum
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Giriş Yap
          </Button>
          veya <Link to="/customer/register">Kayıt Ol</Link>
        </Form.Item>
      </Form>
    </div> </div>
  );
};

export default CustomerLogin;

// src/pages/Customer/Register/CustomerRegister.tsx
import React from 'react';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import './Register.css'; // Stil dosyasını import ediyoruz

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="90">+90</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className='user-bg'>
    <div className="register-container">
      <h2 className="register-title">Kayıt Ol</h2>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'Geçerli bir E-posta adresi giriniz!',
            },
            {
              required: true,
              message: 'Lütfen E-posta adresinizi giriniz!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Şifre"
          rules={[
            {
              required: true,
              message: 'Lütfen şifrenizi giriniz!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Şifreyi Onaylayın"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Lütfen şifrenizi onaylayın!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Girdiğiniz şifreler eşleşmiyor!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="nickname"
          label="Takma Ad"
          tooltip="Diğerlerinin sizi nasıl çağırmasını istersiniz?"
          rules={[{ required: true, message: 'Lütfen takma adınızı giriniz!', whitespace: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Telefon Numarası"
          rules={[{ required: true, message: 'Lütfen telefon numaranızı giriniz!' }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Cinsiyet"
          rules={[{ required: true, message: 'Lütfen cinsiyetinizi seçiniz!' }]}
        >
          <Select placeholder="Cinsiyetinizi seçiniz">
            <Option value="male">Erkek</Option>
            <Option value="female">Kadın</Option>
            <Option value="other">Diğer</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Sözleşmeyi kabul etmelisiniz')),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            Sözleşmeyi okudum ve kabul ediyorum <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Kayıt Ol
          </Button>
        </Form.Item>
      </Form>
    </div>
    </div>
  );
};

export default Register;

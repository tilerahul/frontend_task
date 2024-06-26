import React, { useEffect, useState } from 'react';
import { Input, Button, Form, Typography, message } from 'antd';

const { Title } = Typography;

const InputHandler = ({ onSubmit, user, editMode = false }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (editMode && user) {
      setFormData({ name: user.name, email: user.email });
    } else {
      setFormData({ name: '', email: '' });
    }
  }, [editMode, user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email) {
      message.error('Please fill in both fields');
      return;
    }
    onSubmit(formData);
    setFormData({ name: '', email: '' });
  };

  return (
    <section className="pt-0">
      <div className="flex justify-center h-auto">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg mt-9">
          <div className="p-6 space-y-4 md:space-y-6">
            <Title level={2} className="text-center">
              User Details Form
            </Title>
            <Form layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                label="Your Name"
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please enter your email' }]}
              >
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  {editMode ? 'Edit User' : 'Add User'}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InputHandler;

import React, { useEffect, useState } from 'react';
import { Input, Button, Form, Typography, message } from 'antd';

const { Title } = Typography;

const InputHandler = ({ onSubmit, user, editMode = false }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(()=>{
    if(editMode){
      setName('');
      setEmail('');
    }
  }, [editMode])

  const handleSubmit = () => {
    if (!name || !email) {
      message.error('Please fill in both fields');
      return;
    }
    onSubmit({ name, email });
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{message: 'Please enter your email', required:'true' }]}
              >
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  {!!editMode ? 'Edit user' : 'Add user'}
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

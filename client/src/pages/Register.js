import React, { useEffect } from 'react';
import { Button, Form, Input, message } from 'antd';
import '../resources/authentication.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            await axios.post('/api/user/register', values);
            message.success('Registration successful');
            navigate('/login');
        } catch (error) {
            message.error('Registration failed');
        }
    };

    useEffect(() => {
        if (localStorage.getItem('logged-user')) {
            navigate('/home');
        }
    }, []);

    return (
        <div className="auth-parent">
            <Form layout="vertical" form={form} onFinish={onFinish}>
                <h1>Register</h1>
                <hr />
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[{ required: true, message: 'Please enter your username' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true, message: 'Please enter your password' }]}
                >
                  <Input type="password" />
                </Form.Item>

                <Form.Item
                    name="cpassword"
                    label="Confirm Password"
                    dependencies={['password']}
                    rules={[
                        { required: true, message: 'Please confirm your password' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Passwords do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input type="password" />
                </Form.Item>

                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/login">Click Here to Login</Link>
                    <Button type="primary" htmlType="submit">
                        REGISTER
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default Register;

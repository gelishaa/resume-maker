import React from "react";
import { Button, Checkbox, Form, Input, message } from 'antd';
import {Link, useNavigate} from 'react-router-dom'
import FormItem from "antd/es/form/FormItem";
import '../resources/authentication.css'
import axios from "axios";
function Register() {
    const navigate = useNavigate()
    const onFinish = async(values) => {
        try{
            const user = await axios.post('/api/user/login' , values)
            message.success('Login successfull'); 
            localStorage.setItem('logged-user', JSON.stringify(user.data));
            navigate('/home');
        } catch (error){
            message.error('Login failed')

        }
    }

    return (
        <div className="auth-parent">
            <Form layout='vertical' onFinish={onFinish}>
                <h1>Login</h1>
                <hr />
                <Form.Item name='username' label='Username'>
                    <Input />
                </Form.Item>

                <Form.Item name='password' label='Password'>
                    <Input type="password"/>
                </Form.Item>

                <div className="d-flex align-items-center justify-content-between">
                    <Link to = '/register'>Click Here to Register</Link>
                    <Button type="primary" htmlType="submit">
                        LOGIN
                    </Button>
                </div>



            </Form>
        </div>
    )
}

export default Register
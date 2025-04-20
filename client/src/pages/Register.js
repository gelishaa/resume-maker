import React from "react";
import { Button, Checkbox, Form, Input, message } from 'antd';
import FormItem from "antd/es/form/FormItem";
import '../resources/authentication.css'
import { Link } from "react-router-dom";
import axios from 'axios'


function Register() {

    const onFinish = async(values) => {
        try{
            await axios.post('/api/user/register' , values)
            message.success('Registration successfull')    
        } catch (error){
            message.error('Registration failed')

        }
    }

    return (
        <div className="auth-parent">
            <Form layout='vertical' onFinish={onFinish}>
                <h1>Register</h1>
                <hr />
                <Form.Item name='username' label='Username'>
                    <Input />
                </Form.Item>

                <Form.Item name='password' label='Password'>
                    <Input type='password' />
                </Form.Item>

                <Form.Item name='cpassword' label='Confirm Password'>
                    <Input type='password'/>
                </Form.Item>

                <div className="d-flex align-items-center justify-content-between">
                    <Link to='/login'>Click Here to Login</Link>
                    <Button type="primary" htmlType="submit">
                        REGISTER
                    </Button>
                </div>


            </Form>
        </div>
    )
}

export default Register
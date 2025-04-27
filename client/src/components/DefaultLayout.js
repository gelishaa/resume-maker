import React from 'react'
import './../resources/defaultlayout.css'
import { Button, Dropdown } from 'antd'
import { useNavigate } from 'react-router-dom';
function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('logged-user'));
    const navigate = useNavigate()
    const Logout = () => {
        localStorage.removeItem('logged-user');
        navigate('/login');
    };
    const items = [{
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="/home">
            Home
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="/profile">
            Profile
          </a>
        ),
      },
      {
        key: '3',
        label: (
            <span onClick={Logout}>Logout</span>
        ),
      },
    ];
    return (
        <div className='layout'>
            <div className='header'>
                <h1>Resume Maker</h1>
                <Dropdown menu={{ items }} placement="bottomLeft">
                    <Button>{user.username}</Button>
                </Dropdown>
            </div>
            <div className='content'>
                {props.children}
            </div>
        </div>
    )
}

export default DefaultLayout
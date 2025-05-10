import React from 'react'
import './../resources/defaultlayout.css'
import { Button, Dropdown } from 'antd'
import { useNavigate,Link } from 'react-router-dom';
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
          <Link to="/home">
            Home
          </Link>
        ),
      },
      {
        key: '2',
        label: (
          <Link to="/profile">
            Profile
          </Link>
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
                <h1 onClick={()=>navigate('/home')} style={{cursor:'pointer'}}>Resume Maker</h1>
                <Dropdown menu={{ items }} placement="bottomLeft">
                    <Button>{user.username}</Button>
                </Dropdown>
            </div>
            <div className='content' style={{overflow:'scroll'}}>
                {props.children}
            </div>
        </div>
    )
}

export default DefaultLayout
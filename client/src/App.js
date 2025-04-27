import logo from './logo.svg';
import './App.css';
import { Button, Flex } from 'antd';
import { BrowserRouter, Routes, Route,Navigate  } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {

  if (localStorage.getItem("logged-user")) {
    return props.children;
  }
  else {
    return <Navigate to="/login" />;
  }

}

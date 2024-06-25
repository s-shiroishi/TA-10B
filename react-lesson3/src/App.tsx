import { useState, useEffect } from 'react';
import {Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import {RoutePathsType} from './types/RoutePaths';

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(!!localStorage.getItem('isLogin'));

  useEffect(() => {
    setIsLogin(!!localStorage.getItem('isLogin'));
  }, []);

  const navigate = useNavigate();

  const routePaths: RoutePathsType = {
    'login': '/',
    'register': '/register',
    'dashboard': '/dashboard',
  }

  const handleNavigation = (pathKey: keyof RoutePathsType) => {
    navigate(routePaths[pathKey]);
  };

  return (
    <Routes>
      <Route path='/' element={<Login setIsLogin={setIsLogin}  handleNavigation={handleNavigation}/>}/>
      <Route path='/register' element={<Register setIsLogin={setIsLogin}  handleNavigation={handleNavigation}/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default App

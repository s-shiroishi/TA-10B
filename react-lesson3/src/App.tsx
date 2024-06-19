import {Routes, Route, useNavigate } from 'react-router-dom';
import Auth from './components/pages/Auth';
import Dashboard from './components/pages/Dashboard';
import {RoutePathsType} from './types/RoutePaths';
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const navigate = useNavigate();

  const routePaths: RoutePathsType = {
    'dashboard': '/dashboard',
    'auth': '/',
  }

  const handleNavigation = (pathKey: keyof RoutePathsType) => {
    navigate(routePaths[pathKey]);
  };

  return (
    <Routes>
      <Route path='/' element={<Auth isLogin={isLogin} setIsLogin={setIsLogin}  handleNavigation={handleNavigation}/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default App

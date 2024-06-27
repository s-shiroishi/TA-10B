import { useState, useEffect } from 'react';
import {Routes, Route, useNavigate } from 'react-router-dom';
import { auth } from "./firebase"
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import {RoutePathsType} from './types/routePaths'
import { UserType } from "./types/user"

function App() {
  const [user, setUser] = useState<UserType | null>(null);
  console.log(user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("ユーザーがログインしていません");
      }
    });

    return () => unsubscribe();
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
      <Route path='/' element={<Login handleNavigation={handleNavigation}/>}/>
      <Route path='/register' element={<Register handleNavigation={handleNavigation}/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default App

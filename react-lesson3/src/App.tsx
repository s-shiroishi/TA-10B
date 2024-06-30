import { useEffect, useState } from 'react';
import {Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { db } from "./firebase"
import { collection, getDocs, query, where } from 'firebase/firestore';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import {RoutePathsType} from './types/routePaths'
import { UserType } from "./types/user"

function App() {

  const initUserData = () => {
    const userDate = localStorage.getItem('user');
    if(userDate){
      return JSON.parse(userDate);
    }
    else{
      return null;
    };
  };

  const [user, setUser] = useState<UserType>(initUserData);
  
  const navigate = useNavigate();

  useEffect(() => {
    if(user){
      navigate('/dashboard');
    }
    else{
      navigate('/');
    }
  },[user])

  const getUserInfo =  async (id: string) => {
    try {
      const q = query(collection(db, 'users'), where('id', '==', id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const userData = {
          id,
          name: doc.data().name,
          wallet: doc.data().wallet,
        }
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
      });
    } catch (error) {
      console.error("ユーザー情報の取得に失敗しました", error);
    }
  };

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
      <Route path='/' element={<Login getUserInfo={getUserInfo} handleNavigation={handleNavigation}/>}/>
      <Route path='/register' element={<Register getUserInfo={getUserInfo}  handleNavigation={handleNavigation}/>}/>
      <Route path='/dashboard' element={user ? <Dashboard user={user} setUser={setUser}/> : <Navigate replace to='/'/> }/>
    </Routes>
  )
}

export default App

import { useEffect, useState } from 'react';
import {Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { db } from "./firebase"
import { collection, query, where, onSnapshot } from 'firebase/firestore';
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
  const [otherUsers, setOtherUsers] = useState<UserType[]>([]);
  
  const navigate = useNavigate();
  const routePaths: RoutePathsType = {
    'login': '/',
    'register': '/register',
    'dashboard': '/dashboard',
  }

  const handleNavigation = (pathKey: keyof RoutePathsType) => {
    navigate(routePaths[pathKey]);
  };

  useEffect(() => {
    if(user){
      getOtherUserInfo();
      navigate('/dashboard');
    }
    else{
      navigate('/');
    }
  },[user])

  const getUserInfo = (id: string) => {
    try {
      const q = query(collection(db, 'users'), where('id', '==', id));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const userDoc = snapshot.docs[0].data();
        const userData = {
          id: userDoc.id,
          name: userDoc.name,
          wallet: userDoc.wallet,
        };
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
      });
      return () => unsubscribe();
    } 
    catch (error) {
      console.error("ユーザー情報の取得に失敗しました", error);
    }
  };

  const getOtherUserInfo =  async () => {
    try {
      const q = query(collection(db, 'users'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const otherUserDocs = snapshot.docs.filter((doc) => doc.data().id !== user?.id);
        const otherUserData = otherUserDocs.map((doc) => ({
          id: doc.data().id,
          name: doc.data().name,
          wallet: doc.data().wallet,
        }));
        setOtherUsers(otherUserData);
      });
      return () => unsubscribe();
    } 
    catch (error) {
      console.error("ユーザー情報の取得に失敗しました", error);
    }
  };


  return (
    <Routes>
      <Route path='/' element={<Login getUserInfo={getUserInfo} handleNavigation={handleNavigation}/>}/>
      <Route path='/register' element={<Register getUserInfo={getUserInfo}  handleNavigation={handleNavigation}/>}/>
      <Route path='/dashboard' element={user ? <Dashboard user={user} setUser={setUser} otherUsers={otherUsers}/> : <Navigate replace to='/'/> }/>
    </Routes>
  )
}

export default App

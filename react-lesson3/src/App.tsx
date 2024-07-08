import { useEffect, useState } from 'react';
import {Routes, Route, useNavigate } from 'react-router-dom';
import { db } from "./firebase"
import { collection, query, onSnapshot } from 'firebase/firestore';
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
      const unsubscribe = onSnapshot(query(collection(db, 'users')), (snapshot) => {
        const userData: UserType[] = snapshot.docs.map((doc) => ({
          id: doc.data().id,
          name: doc.data().name,
          wallet: doc.data().wallet,
        }));
        
        const loginUser = userData.find((data) => data?.id === user?.id);
        setUser(loginUser!);
        localStorage.setItem('user', JSON.stringify(loginUser));
        const newOtherUsers = userData.filter((data) => data?.id !== user?.id);
        setOtherUsers(newOtherUsers);
      });
      navigate('dashboard');
      return () => unsubscribe();
    }
    else{
      setOtherUsers([]);
      navigate('/');
    }
  }, [user])


  return (
    <Routes>
      <Route path='/' element={<Login setUser={setUser} handleNavigation={handleNavigation}/>}/>
      <Route path='/register' element={<Register setUser={setUser} handleNavigation={handleNavigation}/>}/>
      <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser} otherUsers={otherUsers}/>}/>
    </Routes>
  )
}

export default App

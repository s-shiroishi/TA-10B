import { useState, useEffect } from 'react';
import {Routes, Route, useNavigate } from 'react-router-dom';
import { auth, db } from "./firebase"
import { collection, getDocs, query, where } from 'firebase/firestore';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import {RoutePathsType} from './types/routePaths'
import { UserType } from "./types/user"

function App() {
  const [user, setUser] = useState<UserType>(null);

  const getUserInfo =  async (id: string) => {
    const q = query(collection(db, 'users'), where('id', '==', id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUser({
        id,
        name: doc.data().name,
        wallet: doc.data().wallet,
      });
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        getUserInfo(user.uid);
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
      <Route path='/dashboard' element={<Dashboard user={user}/>}/>
    </Routes>
  )
}

export default App

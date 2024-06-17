import {Routes, Route, useNavigate } from 'react-router-dom';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import {RoutePathsType} from './types/RoutePaths';

function App() {

  const navigate = useNavigate();

  const routePaths: RoutePathsType = {
    'dashboard': '/',
    'register': '/register',
  }

  const handleNavigation = (pathKey: keyof RoutePathsType) => {
    navigate(routePaths[pathKey]);
  };

  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/register' element={<Register handleNavigation={handleNavigation}/>}/>
    </Routes>
  )
}

export default App

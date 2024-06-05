import './App.css';
import NavBar from './component/NavBar';

import { Routes, Route, Link, Navigate} from "react-router-dom";
import Profile from './pages/Profile';
import Stat from './pages/Stat';
import AddArt from './pages/AddArt';
import Objectifs from './pages/Objectifs';
import Accueil from './pages/Accueil';
import Setting from './pages/Setting';
import Logout from './pages/Logout';


function App() {
  return (
  <>
    <NavBar/>
    <Routes>  
              <Route path='/' element={<Navigate to='/accueil'/>}/>
              <Route path='/accueil' element={<Accueil/>}/>
              <Route path="/profile/" element={<Profile />} />
              <Route path="/stats/" element={<Stat />} />
              <Route path="/objectifs/" element={<Objectifs />} />
              <Route path="/add/" element={<AddArt />} />
              <Route path='/setting' element={<Setting/>} />
              <Route path='/logout' element={<Logout/>}/>
            </Routes>
  </>
  )
}

export default App;

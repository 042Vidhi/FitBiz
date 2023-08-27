import './App.css';
import {BrowserRouter as Router,Routes , Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Trainers from './pages/Trainers';
import EnrolledServices from './pages/EnrolledServices';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import TrainerProfile from './pages/TrainerProfile';


function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/users/:trainerId" element={<TrainerProfile/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/dashboard/trainers" element={<Trainers/>}/>
          <Route path="/dashboard/enrolled-services" element={<EnrolledServices/>}/>
          <Route path="/dashboard/profile" element={<Profile/>}/>
          <Route path="/dashboard/notifications" element={<Notifications/>}/>
          <Route path="/dashboard/logout" element={<Logout/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router,Routes , Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;

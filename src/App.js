
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './XipperHotel/HomePage';
import LoginPage from './XipperHotel/LoginPage';
import Registration from './XipperHotel/Registration';
import AuthHomepage from './XipperHotel/AuthHomepage';
import CheckinComp from './XipperHotel/CheckinComp';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/register-page" element={<Registration/>} />
        <Route path="/welcome-xipper" element={<AuthHomepage/>} />
        <Route path="/check-in-hotel" element={<CheckinComp/>} />
      </Routes>
    </Router>
  );
}

export default App;

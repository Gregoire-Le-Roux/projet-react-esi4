import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import DashboardCommands from './back-office/DashboardCommands';
import DashboardArticles from './back-office/DashboardArticles';

// react-router-dom permet de définir des routes liées à des composants
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route index element={<Home/>} /> */}
        {/* <Route path="/connexion" element={<Authentification/>} /> */}
        <Route path="/dashboard-commands" element={<DashboardCommands/>} />
        <Route path="/dashboard-articles" element={<DashboardArticles/>} />
      </Routes>
    </Router>
  )
}

export default App

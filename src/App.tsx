import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import DashboardCommands from './back-office/DashboardCommands';
import DashboardArticles from './back-office/DashboardArticles';
import Home from "./front-office/Home"
import Authentication from './front-office/Authentification';
import Panier from './front-office/Panier';
import { AuthProvider } from './config/AuthProvider';

// import DashboardAdmin from './back-office/Dashboard';

// react-router-dom permet de définir des routes liées à des composants
function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/connexion" element={<Authentication/>} />
        <Route path="/Panier" element={<Panier/>} />
        <Route path="/dashboard-commands" element={<DashboardCommands/>} />
        <Route path="/dashboard-articles" element={<DashboardArticles/>} />
      </Routes>
    </Router>
    </AuthProvider>
  )
}









export default App

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
import ProtectedRoute from './components/ProtectedRoute';


// react-router-dom permet de définir des routes liées à des composants
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home/>} />
          <Route path="/connexion" element={<Authentication/>} />
          <Route path="/Panier" element={<Panier/>} />
          {/* Protected routes */}
          <Route path="/dashboard-commands" element={<ProtectedRoute><DashboardCommands/></ProtectedRoute>} />
          <Route path="/dashboard-articles" element={<ProtectedRoute><DashboardArticles/></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App

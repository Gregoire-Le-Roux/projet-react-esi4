import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import DashboardAdmin from './back-office/Dashboard';

// react-router-dom permet de définir des routes liées à des composants
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route index element={<Home/>} /> */}
        {/* <Route path="/connexion" element={<Authentification/>} /> */}
        {/* <Route path="/dashboard" element={<DashboardAdmin/>} /> */}
      </Routes>
    </Router>
  )
}

export default App

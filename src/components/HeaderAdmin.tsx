import { useNavigate } from "react-router-dom";
import Logo from '../assets/Logo.png';

function HeaderAdmin () {
    let navigate = useNavigate();

    return (
        <div>
            <img className='fixed top-5 left-5 w-28' src={Logo} alt="Logo Surfed"/>
            <div className="absolute right-0">
                <button type="button" onClick={() => navigate("/")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-5 rounded">
                Retour à l'acceuil
                </button>
            </div>
            <h1 className="text-5xl">Dashboard</h1> 
            
            <div className="mt-3">
                <button type="button" onClick={() => navigate("/dashboard-commands")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-5 rounded">
                    Commandes
                </button>
                <button type="button" onClick={() => navigate("/dashboard-articles")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Articles
                </button>
            </div>
        </div>
    )
}

export default HeaderAdmin;
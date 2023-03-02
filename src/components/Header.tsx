import Logo from '../assets/Logo.png';
import Chariot from '../assets/Panier.jpg'
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../config/AuthProvider';


export default function Header() {
    let navigate = useNavigate();
    const { user, signOut } = useAuth(); 

    function Authentication() {
        let path = '/connexion';
        navigate(path);
    }

    function Deconnexion() {
        signOut();
        navigate('/');
    }

    function Dashboard() {
        navigate('/dashboard-commands');
    }

    function Panier() {
        let path = '/panier';
        navigate(path);
    }



    return (
        <div>

            <div className="bg-white bg-scroll fixed top-0 left-0 w-full h-32">
  

            </div>
            <img className='fixed top-5 left-5 w-28' src={Logo} alt="Logo Surfed"/>

            {user && user.role === "admin" ? 
                <div className="">
                    <button
                        type="button"
                        onClick={()=>Dashboard()}
                        className="fixed top-10 left-40 inline-block rounded bg-primary px-3 pt-2.5 pb-2 text-s font-black uppercase leading-normal text-purple shadow-[0_4px_9px_-4px_#3b71ca]">
                        Admin
                    </button>
                </div>
            : null}
            
            <div className="">
                <button
                    type="button"
                    onClick={()=>Panier()}
                    className="fixed top-10 right-52 inline-block rounded bg-primary px-3 pt-2.5 pb-2 text-s font-black uppercase leading-normal text-purple shadow-[0_4px_9px_-4px_#3b71ca] ">
                    <img className="h-6" src={Chariot} alt="Panier"/>
                </button>
            </div>
            <div className="">
                {!user ?
                <button
                    type="button"
                    onClick={()=>Authentication()}
                    className="fixed top-10 right-6 inline-block rounded bg-primary px-3 pt-2.5 pb-2 text-s font-black uppercase leading-normal text-purple shadow-[0_4px_9px_-4px_#3b71ca]">
                    Se Connecter
                </button>
                : 
                <button
                    type="button"
                    onClick={()=> Deconnexion()}
                    className="fixed top-10 right-6 inline-block rounded bg-primary px-3 pt-2.5 pb-2 text-s font-black uppercase leading-normal text-purple shadow-[0_4px_9px_-4px_#3b71ca]">
                    Déconnexion
                </button>
                }
            </div>
        </div>
    )
}


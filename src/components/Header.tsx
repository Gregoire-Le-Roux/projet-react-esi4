import Logo from '../assets/Logo.png';
import Chariot from '../assets/Panier.jpg'
import {useNavigate} from 'react-router-dom';
import barreblanche1 from '../assets/barreblanche1.jpg';


export default function Header() {

    let navigate = useNavigate();

    function Authentication() {
        let path = '/connexion';
        navigate(path);
    }

    function Panier() {
        let path = '/panier';
        navigate(path);
    }



    return (
        <div>

            <div>
                <img className="w-full h-32 bg-scroll fixed top-0 left-0 bg-gradient-to-r from-white to-white" src={barreblanche1} alt="Background"/>

            </div>
            <img className='fixed top-5 left-5 w-28' src={Logo} alt="Logo Surfed"/>

            <div className="">
                <button
                    type="button"
                    onClick={()=>Authentication()}
                    className="fixed top-10 right-28 inline-block rounded bg-primary px-3 pt-2.5 pb-2 text-s font-black uppercase leading-normal text-purple shadow-[0_4px_9px_-4px_#3b71ca]">
                    Se Connecter
                    </button> 
            </div>

        <div className="">
            <button
                type="button"
                onClick={()=>Panier()}
                className="fixed top-10 right-6 inline-block rounded bg-primary px-3 pt-2.5 pb-2 text-s font-black uppercase leading-normal text-purple shadow-[0_4px_9px_-4px_#3b71ca] ">
                <img className="h-6" src={Chariot} alt="Panier"/>

                </button>
            </div>
        </div>
    )
}


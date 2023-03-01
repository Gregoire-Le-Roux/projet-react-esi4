import Header from "../components/Header"
import {useNavigate} from 'react-router-dom';

function Panier() {
    
    let navigate = useNavigate();

    function Home() {
        let path = '/';
        navigate(path);
    }

    return (
        <div>
            <Header/>

            <div className="fixed left-48">
                <h1>PANIER</h1>
            </div>

            <div className="">
                <button
                    type="button"
                    onClick={()=>Home()}
                    className="fixed top-10 right-75 inline-block rounded bg-primary px-3 pt-2.5 pb-2 text-s font-black uppercase leading-normal text-purple shadow-[0_4px_9px_-4px_#3b71ca] ">
                    Retour
                </button> 
            </div>
        </div>

        
    

    )
}

export default Panier
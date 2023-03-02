import Header from "../components/Header"
import {useNavigate} from 'react-router-dom';

function Authentication() {

    let navigate = useNavigate();

    function Home() {
        let path = '/';
        navigate(path);
    }


    return (
        <div>
                <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                        <h1 className="text-5xl font-semibold text-center text-stone-800 underline">
                        Connexion
                        </h1><br></br><br></br>
                    <form className="mt-6">
                        <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-900">
                            E-mail / Identifiant
                            </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="mot de passe"
                        className="block text-sm font-semibold text-gray-900">
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                </div>

                <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Se connecter
                        </button>
                    </div>
                    <div className="">
                <button
                    type="button"
                    onClick={()=>Home()}
                    className="fixed top-10 right-28 inline-block rounded bg-primary px-3 pt-2.5 pb-2 text-s font-black uppercase leading-normal text-purple shadow-[0_4px_9px_-4px_#3b71ca] ">
                    Retour
                </button> 
            </div>
            </form>
        </div>
    </div>


        </div>
    )
}

export default Authentication
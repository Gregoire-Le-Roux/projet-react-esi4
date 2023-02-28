import React from 'react';
import Logo from '../assets/Logo.png';
import Panier from '../assets/Panier.jpg'


export default function Header() {
    return (
        <div>
        <img className='fixed top-5 left-5 w-28' src={Logo} alt="Logo Surfed"/>
        

        {/* <img className='fixed top-12 right-4 w-9' src={Panier} alt="Panier"/> */}

        <div className="">
            <button
                type="button"
                className="fixed top-10 right-28 inline-block rounded bg-primary px-3 pt-2.5 pb-2 text-s font-black uppercase leading-normal text-purple shadow-[0_4px_9px_-4px_#3b71ca] ">
                Se Connecter
                </button>
                </div>

        <div className="">
            <button
                type="button"
                className="fixed top-10 right-6 inline-block rounded bg-primary px-3 pt-2.5 pb-2 text-s font-black uppercase leading-normal text-purple shadow-[0_4px_9px_-4px_#3b71ca] ">
                <img className="h-6" src={Panier} alt="Panier"/>
                </button>
        </div>


        

</div>
    )
}


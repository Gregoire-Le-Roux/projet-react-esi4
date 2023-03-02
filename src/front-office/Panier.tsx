import Header from "../components/Header"
import {useNavigate} from 'react-router-dom';
import { useContext, useEffect } from "react";
import { AuthContext, AuthProvider } from "../config/AuthProvider";
import {useState} from "react";
import Surf1 from '../assets/Surf1.jpg';

function Panier() {

    const [articles, setArticles] = useState([{name: "Surf", price: 80, description:"lorem ipsum"}] )
    const {
        panier,
        setPanier
    } = useContext(AuthContext)

    const RetirePanier = (article:any) => {
    const ProductExist = panier.find(item => item.article._id === article._id);
    if (ProductExist) {
        if (ProductExist.quantity -1 === 0) {
            setPanier(
                panier.filter(item=>item.article._id !== article._id)
            )
        
        } else {
      setPanier(
        panier.map(item =>
          item.article._id === article._id
            ? { ...ProductExist, quantity: ProductExist.quantity -1 }
            : item
        )
      );}
  };}


    let navigate = useNavigate();

    async function fetchData() {
        await AuthProvider
    }

    useEffect (()=> {
        fetchData()
    },[])

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
            {panier.map(item =>
                <div className="fixed top-40 align-center flex-row border-solid border-gray-900 border-2">
                <div className="flex">
                <div className="flex-col justify-items-center justify-center self-center">
                <img className="" src={Surf1} alt="Surf"></img>
                <h4><b>{item.article.name}</b></h4>
                <p>{item.article.price.toString()}</p>
                <p>{item.article.description}</p>
                <p>Quantité : <b>{item.quantity}</b></p>
                <div> 
                <button type="button"
                onClick={()=>RetirePanier(item.article)}
                className="left-2 px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                Retirer du panier
                </button>
                </div> <br/>
            </div>
    </div></div>
    )}
        

        </div>
        )
            }

export default Panier 
import Header from "../components/Header"
import {useNavigate} from 'react-router-dom';
import { useEffect } from "react";
import { AuthProvider } from "../config/AuthProvider";
import {useState} from "react";
import Surf1 from '../assets/Surf1.jpg';

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


    async function fetchData() {
        await AuthProvider
    }

useEffect (()=> {
    fetchData()
},[])}


// const [panier, setPanier] = useState([] as Array<any> )
// const [articles, setArticles] = useState([{name: "Surf", price: 80, description:"lorem ipsum"}] )


// const RetirePanier = (article:any) => {
//     const ProductExist = panier.find(item => item._id === article._id);
//     if (ProductExist) {
//       setPanier(
//         panier.map(item =>
//           item._id === article._id
//             ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
//             : item
//         )
//       );
//   };}


    //     return (
    //     <div>
    //         <Header/>

    //         <div className="fixed left-48">
    //             <h1>PANIER</h1>
    //         </div>

    //         <div className="">
    //             <button
    //                 type="button"
    //                 onClick={()=>Home()}
    //                 className="fixed top-10 right-75 inline-block rounded bg-primary px-3 pt-2.5 pb-2 text-s font-black uppercase leading-normal text-purple shadow-[0_4px_9px_-4px_#3b71ca] ">
    //                 Retour
    //             </button> 
    //         </div>
    // }

    //         {/* { {articles.map(article=>
    //     <div className="flex-row  border-solid border-gray-900 border-2">
    //         <div className="flex"><img className="h-32" src={Surf1} alt="Surf"/>
    //         <div className="flex-col justify-items-center justify-center self-center"><h4><b>{article.name}</b></h4>
    //         <p>{article.price}</p>
    //         <p>{article.description}</p></div></div><br></br>
    //         <div>
    //             <button type="button"
    //                 onClick={()=>RetirePanier(article)}
    //                 className="flex px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
    //                 Retirer du panier
    //             </button><br></br>
    //         </div>
    //     </div>
    //     </div>
    // ) */}


export default Panier
import Header from "../components/Header"
import Planche from "../assets/Planche.jpg"
import { useContext, useState } from "react";
import Surf1 from "../assets/Surf1.jpg"
import { AuthContext } from "../config/AuthProvider";

function Home(){


    const [articles, setArticles] = useState([{name: "Surf", price: 80, description:"lorem ipsum"}] )
    const {
        panier,
        setPanier,
    } = useContext(AuthContext)

    
    const AjoutePanier = (article:any) => {
        const ProductExist = panier?.find(item => item.article._id === article._id);
        if (ProductExist) {
          setPanier(
            panier?.map(item =>
              item.article._id === article._id
                ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
                : item
            )
          );
        } else {
          setPanier([...panier, { 
            article: article, 
            quantity: 1 
          }]);
        }
      };

    return (
        <div><Header/>
        
        <div className="">
            <blockquote
            className="absolute top-48 text-xl italic text-center font-semibold dark:text-white align-middle">
             Le surf (abréviation française de l'anglais surf-riding, où riding signifie « monter » et surf « (vagues) déferlantes ») est une pratique physique individuelle de glisse sur les vagues, au bord de l'océan.
            </blockquote>
        </div>

        <section className="flex-row align-center text-gray-800 text-center md:text-left mb-3">
    <div className="block rounded-lg shadow-lg bg-white">
      <div className="flex flex-wrap items-center">
        <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-80 md:px-30">
            <h2 className="text-3xl font-bold mb-6 pb-2">Produit le plus vendu</h2>
            <p className="text-gray-500 mb-6 pb-2"></p>
            <div className="flex flex-wrap mb-6">
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex justify-center md:justify-start">
                  <svg className="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Planche évolutive
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center justify-center md:justify-start">
                  <svg className="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Facile à la rame
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center justify-center md:justify-start">
                  <svg className="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Construction en mousse
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center justify-center md:justify-start">
                  <svg className="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Shape volumineux
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center justify-center md:justify-start">
                  <svg className="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Confortable
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center justify-center md:justify-start">
                  <svg className="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>Niveau : débutant
                </p>
              </div>
            </div>
            <img className="flex" src={Planche} alt="Planche"/>
          </div>
        </div>
      </div>
    </div>
  </section>


    {articles.map(article=>
        <div className="flex-row  border-solid border-gray-900 border-2">
            <div className="flex"><img className="h-32" src={Surf1} alt="Surf"/>
            <div className="flex-col justify-items-center justify-center self-center"><h4><b>{article.name}</b></h4>
            <p>{article.price}</p>
            <p>{article.description}</p></div></div><br/>
            <div>
                <button type="button"
                    onClick={()=>AjoutePanier(article)}
                    className="flex-row justify-items-center justify-center px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                    Ajouter au panier
                </button><br></br>
            </div>
        </div>
    )}       

    </div>

    )
}

export default Home

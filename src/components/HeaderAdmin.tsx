import { useNavigate } from "react-router-dom";

function HeaderAdmin () {
    let navigate = useNavigate();

    return (
        <div>
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
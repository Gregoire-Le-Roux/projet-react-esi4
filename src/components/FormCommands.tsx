import { useState } from "react";

function Formulaire() {

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [adresse, setAdresse] = useState("");

  
    const handleSubmit = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
    }

    return (
      <div className="fixed top-52 right-10">
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="nom">Nom :</label>
      <input type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)}/>
    </div>
    <div>
      <label htmlFor="prenom">Prénom :</label>
      <input type="text" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)}/>
    </div>
    <div>
      <label htmlFor="email">Email :</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <div>
      <label htmlFor="adresse">Adresse :</label>
      <input type="text" id="adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)}/>
    </div>
    <button type="submit">Valider la commande</button>
  </form>
  </div>
    );
}

export default Formulaire
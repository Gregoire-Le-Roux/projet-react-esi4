import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";


// Connexion d'un utilisateur sur Firebase
export async function authenticate(email : string, password : string) {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Utilisateur connecté
        const user = userCredential.user;
        console.log('authenticate user ', user);
        // TODO: mettre l'utilisateur dans le contexte
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { Command } from "../models/Commands";


// Connexion d'un utilisateur sur Firebase
export async function authenticate(email : string, password : string) {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Utilisateur connecté
        const user = userCredential.user;
        console.log('authenticate user ', user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

// Récupère les documents d'une collection sur Firebase que l'on passe en paramètre
export async function getCollection(col: string) {
    const querySnapshot = await getDocs(collection(db, col));
    return querySnapshot;
}

export async function getCommands() {
    let data: Array<Command> = [];
    try {
        const querySnapshot = await getCollection('commands');
        querySnapshot.forEach((doc) => {
            // doc.data() n'est jamais undefined pour les documents d'une querySnapshot
            let command = {
                _id: doc.id,
                ...doc.data(),
            }
            data.push(command as Command);
          });
        return data;
    } catch(error) {
        console.log(error);
    } finally {
        return data;
    }
}

export async function updateCommand(command: Command) {
    try {
    const commandRef = doc(db, "commands", command._id);
    await updateDoc(commandRef, {
        ...command
    });
    } catch(err) {
        console.log(err);
    }
}
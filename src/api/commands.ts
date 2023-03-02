import { db } from "../config/firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, Timestamp, updateDoc } from "firebase/firestore";
import { Command } from "../models/Commands";
import { getArticles } from "./articles";

const col = 'commands'

export async function getCommands() {
    let data: Array<Command> = [];
    try {
        // Récupère les documents d'une collection sur Firebase que l'on passe en paramètre
        const querySnapshot = await getDocs(collection(db, col));
        // Récupère tous les articles
        let allArticles = await getArticles();
        querySnapshot.forEach((doc) => {
            // doc.data() n'est jamais undefined pour les documents d'une querySnapshot
            let command = {
                _id: doc.id,
                ...doc.data(),
            } as Command;
            if(command._id && command.client && command.address && command.idArticles && command.price >= 0 && command.createdAt && command.status) {
                command.articles = [];
                command.price = 0;
                // On lie les idArticles aux articles existants et calcule le prix
                command.idArticles?.map(article => {
                    let findArticle = allArticles.find(find => find._id === article);
                    if(findArticle) {
                        command.price = Number(command.price) + Number(findArticle.price);
                        command.articles?.push(findArticle);
                    }
                })
                data.push(command);
            }
          });
        return data;
    } catch(error) {
        console.log(error);
    } finally {
        return data;
    }
}

export async function addCommand() {
    try {
        let command = {
            client: "Grégoire",
            address: "26 Avenue Tony Garnier, 69007 Lyon",
            idArticles: ["2QPQwpCMhXQfo9zDUTPc"],
            price: 100,
            status: 'En cours',
            createdAt: Timestamp.now(),
        };
        await addDoc(collection(db, col), {
            ...command,
        })
    } catch(err) {
        console.log(err);
    }
}

// Mettre à jour une commande
export async function updateCommand(command: Command) {
    try {
        if(command.articles) delete command.articles; // On ne veut pas sauvegarder ce champ dans la base de données
        const commandRef = doc(db, col, command._id);
        await updateDoc(commandRef, {
            ...command
        });
    } catch(err) {
        console.log(err);
    }
}

// Supprimer une commande
export async function deleteCommand(command: Command) {
    try {
        await deleteDoc(doc(db, col, command._id));
    } catch(err) {
        console.log(err);
    }
}
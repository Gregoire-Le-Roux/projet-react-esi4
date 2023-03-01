import { db } from "../config/firebase";
import { collection, deleteDoc, doc, getDocs, setDoc, Timestamp, updateDoc } from "firebase/firestore";
import { Command } from "../models/Commands";

const col = 'commands'

export async function getCommands() {
    let data: Array<Command> = [];
    try {
        // Récupère les documents d'une collection sur Firebase que l'on passe en paramètre
        const querySnapshot = await getDocs(collection(db, col));
        querySnapshot.forEach((doc) => {
            // doc.data() n'est jamais undefined pour les documents d'une querySnapshot
            let command = {
                _id: doc.id,
                ...doc.data(),
            } as Command;
            if(command._id && command.client && command.price && command.createdAt && command.status)
            data.push(command);
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
            articles: '3 articles',
            price: 40,
            status: 'En cours',
            createdAt: new Date(),
        };
        await setDoc(doc(db, col, "test"), {
            ...command
        });
    } catch(err) {
        console.log(err);
    }
}

// Mettre à jour une commande
export async function updateCommand(command: Command) {
    try {
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
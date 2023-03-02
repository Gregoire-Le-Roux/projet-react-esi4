import { db } from "../config/firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, Timestamp, updateDoc } from "firebase/firestore";
import { User } from "../models/Users";
import { sha256 } from "js-sha256";

const col = 'users'

// Connexion d'un utilisateur
export async function signIn (email: string, password: string) {
    let user = {} as User;
    let status = "error";
    try {
        let hashPassword = sha256(password)
        const querySnapshot = await getDocs(collection(db, col));
        querySnapshot.forEach((doc) => {
            // doc.data() n'est jamais undefined pour les documents d'une querySnapshot
            let searchUser = {
                _id: doc.id,
                ...doc.data(),
            } as User;
            if(searchUser.email === email && searchUser.password === hashPassword) {
                user = searchUser;
                status = "success";
            }
        })
        return {
            status,
            user
        }
    } catch(err) {
        console.log(err);
    } finally {
        return {
            status,
            user
        }
    }
}

export async function getUsers() {
    let data: Array<User> = [];
    try {
        // Récupère les documents d'une collection sur Firebase que l'on passe en paramètre
        const querySnapshot = await getDocs(collection(db, col));
        querySnapshot.forEach((doc) => {
            // doc.data() n'est jamais undefined pour les documents d'une querySnapshot
            let user = {
                _id: doc.id,
                ...doc.data(),
            } as User;
            if(user._id && user.name && user.email)
            data.push(user);
          });
        return data;
    } catch(error) {
        console.log(error);
    } finally {
        return data;
    }
}

// Créer un user
export async function addUser(user: User) {
    try {
        user = {
            ...user,
            createdAt: Timestamp.now(),
        };
        await addDoc(collection(db, col), {
            ...user,
        })
    } catch(err) {
        console.log(err);
    }
}

// Mettre à jour un user
export async function updateUser(user: User) {
    try {
        const userRef = doc(db, col, user._id);
        await updateDoc(userRef, {
            ...user
        });
    } catch(err) {
        console.log(err);
    }
}

// Supprimer un user
export async function deleteUser(user: User) {
    try {
        await deleteDoc(doc(db, col, user._id));
    } catch(err) {
        console.log(err);
    }
}
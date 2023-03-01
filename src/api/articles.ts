import { db } from "../config/firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, Timestamp, updateDoc } from "firebase/firestore";
import { Article } from "../models/Articles";

const col = 'articles'

export async function getArticles() {
    let data: Array<Article> = [];
    try {
        // Récupère les documents d'une collection sur Firebase que l'on passe en paramètre
        const querySnapshot = await getDocs(collection(db, col));
        querySnapshot.forEach((doc) => {
            // doc.data() n'est jamais undefined pour les documents d'une querySnapshot
            let article = {
                _id: doc.id,
                ...doc.data(),
            } as Article;
            if(article._id && article.name && article.price >= 0 && article.createdAt)
            data.push(article);
          });
        return data;
    } catch(error) {
        console.log(error);
    } finally {
        return data;
    }
}

// Créer un article
export async function addArticle(article: Article) {
    try {
        console.log(article)
        article = {
            ...article,
            createdAt: Timestamp.now(),
        };
        if(!article.price) article.price = 0;
        await addDoc(collection(db, col), {
            ...article,
        })
    } catch(err) {
        console.log(err);
    }
}

// Mettre à jour un article
export async function updateArticle(article: Article) {
    try {
    const articleRef = doc(db, col, article._id);
    await updateDoc(articleRef, {
        ...article
    });
    } catch(err) {
        console.log(err);
    }
}

// Supprimer un article
export async function deleteArticle(article: Article) {
    try {
        await deleteDoc(doc(db, col, article._id));
    } catch(err) {
        console.log(err);
    }
}
import { Timestamp } from "firebase/firestore";
import { Article } from "./Articles";

export interface Command {
    _id: string,
    client: string,
    address: string,
    idArticles: Array<String>,
    articles?: Array<Article>,
    price: Number,
    status: string,
    createdAt: Timestamp,
}
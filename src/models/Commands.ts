import { Timestamp } from "firebase/firestore";

export interface Command {
    _id: string,
    client: string,
    articles: string,
    prix: Number,
    status: string,
    date: Timestamp,
}
import { Timestamp } from "firebase/firestore";

export interface Command {
    _id: string,
    client: string,
    articles: string,
    price: Number,
    status: string,
    createdAt: Timestamp,
}
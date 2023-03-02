import { Timestamp } from "firebase/firestore";

export interface Article {
    _id: string,
    name: string,
    price: Number,
    description: string,
    createdAt: Timestamp,
}
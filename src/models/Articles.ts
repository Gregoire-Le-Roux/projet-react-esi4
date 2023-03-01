import { Timestamp } from "firebase/firestore";

export interface Article {
    _id: string,
    name: string,
    price: Number,
    createdAt: Timestamp,
}
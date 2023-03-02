import { Timestamp } from "firebase/firestore";

export interface User {
    _id: string,
    name: string,
    email: string,
    password: string, // Hash en sha256
    role: string, // "client" ou "admin" 
    createdAt: Timestamp,
}
import { Timestamp } from "firebase/firestore";

export interface Feedback{
    id:string,
    title: string;
    feedback: string;
    createdAt: Timestamp;
    by:string;
    response: string;
    responder: string;
}
import { Timestamp } from "firebase/firestore";
import { Comment } from "@/models/policy";

export interface Feedback{
    id:string,
    title: string;
    feedback: string;
    createdAt: Timestamp;
    by: string;
    userId: string;
    responses: Comment[];
}
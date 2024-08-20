import { Timestamp } from "firebase/firestore";

export interface Policy {
    id: string;

    title: string;

    description: string;

    createdAt: Timestamp;

    updatedAt: Timestamp;

    comments: Comment[];
}

export interface Comment {
    id: string;

    content: string;

    author: string;

    createdAt: Timestamp;
}
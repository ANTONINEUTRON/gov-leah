"use client"

import { cAuth, cFirestore } from "@/firebaseconfig";
import { Feedback } from "@/models/feedback";
import { doc, getDoc, Timestamp, updateDoc } from "firebase/firestore";
import { Comment } from "@/models/policy";
import { useEffect, useState } from "react";
import { convertTimestampToDateString } from "@/components/FeedbackItem";
import LoadingUI from "@/components/LoadingUI";

export default function OpenFeedbackPage({ params }: {
    params: { feedbackid: string }
}){
    const [feedback, setFeedback] = useState<Feedback | null>(null);
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(false);

    const submitComment = async () => {
        setLoading(true);

        try {
            // Reference to the 'policies' collection
            // const policiesRef = collection(cFirestore, '');

            const docRef = doc(cFirestore, "feedback/" + feedback!.id)
            let commentToSave: Comment = {
                id: ((feedback?.responses.length ?? 0) + 1).toString(),
                content: comment,
                author: cAuth.currentUser?.displayName ?? "Anon",
                createdAt: Timestamp.now(),
            };

            await updateDoc(docRef, { responses: [...feedback!.responses, commentToSave] })

            setComment("");

            fetchPolicy();
        } catch (err) {
            console.log(err);
        }

        setLoading(false);
    }

    const fetchPolicy = async () => {
        try {
            // Reference to the specific document in the 'policies' collection
            const feedbackRef = doc(cFirestore, 'feedback', params.feedbackid);

            // Fetch the document from Firestore
            const docSnap = await getDoc(feedbackRef);

            // Check if the document exists
            const feedbackFetched = {
                ...docSnap.data(),
            } as Feedback;

            setFeedback(feedbackFetched);

        } catch (error) {
            console.error('Error fetching feedback: ', error);
        }
    }

    useEffect(() => {
        fetchPolicy();
    }, [])

    return (
        <div>
            <div className="container flex justify-center">
                {
                    feedback
                        ? (
                            <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
                                <div className="mb-6">
                                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                        {feedback.title}
                                    </h1>
                                    <p className="text-gray-700 text-lg mb-4">
                                        {feedback.feedback}
                                    </p>
                                    <div className="text-sm text-gray-500">
                                        <span className="ml-4">sent: {convertTimestampToDateString(feedback.createdAt)}</span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Leave a Comment</h2>
                                    <textarea
                                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        rows={4}
                                        onChange={(e) => setComment(e.target.value)}
                                        placeholder="Write your comment here..."
                                        value={comment}
                                    ></textarea>
                                    {loading && (
                                        <div className="w-2 h-2 relative">
                                            <LoadingUI />
                                        </div>
                                    )}
                                    <button onClick={submitComment} className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                                        Submit Comment
                                    </button>
                                </div>


                                <div>
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                        Comments ({feedback.responses.length})
                                    </h2>
                                    <div className="space-y-6">
                                        {
                                            feedback.responses.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds).map((commet) => (
                                                <div className="p-4 bg-gray-100 rounded-lg">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-sm font-medium text-gray-700">
                                                            {commet.author}
                                                        </span>
                                                        <span className="text-xs text-gray-500">{convertTimestampToDateString(commet.createdAt)}</span>
                                                    </div>
                                                    <p className="text-gray-700 mb-2">
                                                        {commet.content}
                                                    </p>
                                                    <div className="flex space-x-4">
                                                        <button className="text-sm text-blue-500 hover:underline">Reply</button>
                                                        <button className="text-sm text-gray-500 hover:underline">Upvote</button>
                                                        <button className="text-sm text-red-500 hover:underline">Report</button>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                        ) : (
                            <div>
                                Loading Policy ...
                            </div>
                        )
                }
            </div>
        </div>
    );
}
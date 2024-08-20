import { Feedback } from "@/models/feedback";
import { Timestamp } from "firebase/firestore";
import Link from "next/link";

interface FeedbackProps{
    feedback: Feedback
}

export default function FeedbackItem({feedback}: FeedbackProps) {
    return (
        <Link href='feedbacks/23asid'>
            <div className="m-4 bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {feedback.title}
                    </h3>
                    <p className="text-gray-700 text-base mb-4">
                        {feedback.feedback}
                    </p>
                    <div className="text-gray-500 text-sm mb-4">
                        <div>                        
                            Submitted on: {convertTimestampToDateString(feedback.createdAt)}
                        </div>
                    </div>
                </div>
                <div className="px-6 py-4 border-t border-gray-200 flex flex-col justify-between items-start">
                    {/* <button className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-600">
                        View Feedback
                    </button> */}
                    <div>
                        {feedback.response}
                    </div>

                    <div className="text-gray-500 text-sm mb-4">
                        {feedback.responder}
                    </div>
                </div>
            </div>
        </Link>
    );
}


function convertTimestampToDateString(firestoreTimestamp:Timestamp) {
    // Convert Firestore Timestamp to JavaScript Date object
    const date = firestoreTimestamp.toDate();

    // Format the Date object to a readable string
    const readableDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    return readableDate;
}

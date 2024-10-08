"use client";

import AddFeedbackButton from "@/components/AddFeedbackButton";
import FeedbackItem from "@/components/FeedbackItem";
import FeedbackIten from "@/components/FeedbackItem";
import Navbar from "@/components/nav_components/Navbar";
import { cAuth, cFirestore } from "@/firebaseconfig";
import { Feedback } from "@/models/feedback";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const FeedbackPage = ()=>{
    const [feedbacks, setFeedbacks] = useState<Feedback[] | null>(null);
    const [isAdminRef, setIsAdminRef] = useState(false);

    useEffect(()=>{
        var user = cAuth.currentUser!;
        console.log(user.email);
        
        let st = user.email == "admin@nasgovfeed.com";
console.log(st);

        setIsAdminRef(st);

        fetchFeedback();
    },[])

    const fetchFeedback = async ()=>{
        try {
            // Reference to the 'feedback' collection
            const feedbackRef = collection(cFirestore, 'feedback');

            // Building the query
            const feedbackQuery = isAdminRef ? query(
                feedbackRef
            ) : query(
                feedbackRef,
                where('userId', '==', cAuth.currentUser?.uid)
            );

            // Executing the query
            const querySnapshot = await getDocs(feedbackQuery);

            // Extracting and returning the data
            const feedbackList: Feedback[] = querySnapshot.docs.map(doc => ({
                ...(doc.data() as Feedback),
            }));
            
            console.log(feedbackList);
            
            setFeedbacks(feedbackList);
        } catch (e) {
            console.error('Error fetching feedback: ', e);
            throw e;
        }
    }

    return (
        <div className="flex">
            <div className="">
                <Navbar />
            </div>
            <div className="w-full">
                <div className="p-10 w-full">
                    <div className="flex justify-between">
                        <div className="font-semibold text-2xl">
                            Feedbacks
                        </div>
                        {
                            !isAdminRef && (
                                <AddFeedbackButton
                                    refreshFeedback={fetchFeedback} />
                            )
                        }
                    </div>

                    {
                        feedbacks !== null ?
                            feedbacks!.length > 0
                                ?
                                (
                                        <div className="grid grid-cols-3">
                                            {
                                                feedbacks.map((feedback)=>(
                                                    <FeedbackItem 
                                                        key={feedback.id}
                                                        feedback={feedback}
                                                    />
                                                ))
                                            }
                                        </div>
                                ):(
                                    <div className="w-full h-[80vh] flex justify-center items-center">
                                        <div>
                                            No feedbacks yet
                                        </div>
                                    </div>
                                ):(
                                <div>
                                    Loading Feedbacks
                                </div>
                                )
                    }
                        
                </div>
            </div>
        </div>           
    );

}


export default FeedbackPage

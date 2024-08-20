'use client';

import React, { FormEvent, useEffect, useState } from 'react';
import { Button, Modal, Input, Form } from 'antd';
import { addDoc, collection, getDoc, getDocs, Timestamp, updateDoc } from 'firebase/firestore';
import { cAuth, cFirestore } from '@/firebaseconfig';
import { Feedback } from '@/models/feedback';
import { updateCurrentUser } from 'firebase/auth';

const FeedbackButton = ({ refreshFeedback }: { refreshFeedback : ()=>void}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <>
            <Button type="primary" size={"large"} onClick={showModal}>
                Submit Feedback
            </Button>
            <Modal
                title="Submit Feedback"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <FeedbackForm 
                    setIsModalVisible={setIsModalVisible}
                    refreshFeedback={refreshFeedback }/>
            </Modal>
        </>
    );
};

export default FeedbackButton;


const FeedbackForm = ({ refreshFeedback, setIsModalVisible }: { refreshFeedback: () => void, setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>})=>{
    const [feedback, setFeedback] = useState('');
    const [title,setTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const handleSubmit = async () => {
        setLoading(true);
        setError("");

        let user = cAuth.currentUser;

        try {
            // Reference to the 'feedback' collection
            const feedbackRef = collection(cFirestore, 'feedback');

            const feedbackObj: Feedback = {
                id: feedbackRef.id,
                title: title,
                feedback: feedback,
                createdAt: Timestamp.now(),
                by: user?.uid ?? "",
                response: "",
                responder: ""
            };
            // Adding feedback to the collection with a timestamp
            let docref = await addDoc(feedbackRef, feedbackObj);

            await updateDoc(docref, {id: docref.id })

            alert('Feedback submitted successfully!');
            setFeedback(''); // Clear the form
            setIsModalVisible(false);
            refreshFeedback();
        } catch (e:any) {
            setError('Failed to submit feedback. Please try again.');
        }

        setLoading(false);
    };

    return (
        <Form
            layout="vertical"
            onFinish={handleSubmit}>
            <Form.Item
                label="Your Title"
                name="title"
                
                rules={[{ required: true, message: 'Please enter your feedback title' }]}
            >
                <Input onChange={(e)=>setTitle(e.target.value)} placeholder="Write your feedback title here..." />
            </Form.Item>
            <Form.Item
                label="Your Feedback"
                name="feedback"
                rules={[{ required: true, message: 'Please enter your feedback' }]}
            >
                <Input.TextArea onChange={(e) => setFeedback(e.target.value)} rows={4} placeholder="Write your feedback here..." />
            </Form.Item>

            {error && <p className="py-2 text-red-600">{error}</p>}
            
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal, Input, Form } from 'antd';
import { addDoc, collection, Timestamp, updateDoc } from 'firebase/firestore';
import { cAuth, cFirestore } from '@/firebaseconfig';
import { Policy } from '@/models/policy';

const AddPolicyButton = ({ fetchPolicies }: { fetchPolicies : ()=>void}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const isAdminRef = useRef(false);

    useEffect(() => {
        var user = cAuth.currentUser;
        isAdminRef.current = user?.email == "admin@nasgovfeed.com";
    })

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSubmit = (values: any) => {
        if(title.length < 5 || description.length < 5)return;

        savePolicy();
    };

    const savePolicy = async ()=>{
        // Reference to the 'policies' collection
        const policiesRef = collection(cFirestore, 'policies');

        const newPolicy: Policy = {
            id: '', // You may generate this ID if needed
            title: title,
            description: description,
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now(),
            comments: [],
        };

        try {
            // Adding the policy document to Firestore
            const docRef = await addDoc(policiesRef, newPolicy);

            await updateDoc(docRef, { id: docRef.id });

            console.log('Policy saved with ID: ', docRef.id);
            fetchPolicies();
            
            setTitle("");
            setDescription("");
            handleCancel();
        } catch (error) {
            console.error('Error saving policy: ', error);
        }
        setIsModalVisible(false);
    }

    return (
        <div className=''>
            <Button type="primary" size={'large'} onClick={showModal}>
                Add Policy
            </Button>
            <Modal
                title="Add New Policy"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}>
                <Form
                    layout="vertical"
                    onFinish={handleSubmit}>
                    <Form.Item
                        label="Policy Title"
                        name="title"
                        rules={[{ required: true, message: 'Please enter the policy title' }]}>
                        <Input 
                            placeholder="Enter policy title" 
                            onChange={(e)=>setTitle(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        label="Policy Description"
                        name="description"
                        rules={[{ required: true, message: 'Please enter the policy description' }]}
                    >
                        <Input.TextArea 
                            rows={4} 
                            placeholder="Enter policy description" 
                            onChange={(e) => setDescription(e.target.value)} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default AddPolicyButton;
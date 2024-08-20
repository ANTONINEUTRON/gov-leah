'use client';

import React, { useState } from 'react';
import { Button, Modal, Input, Form } from 'antd';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { cFirestore } from '@/firebaseconfig';
import { Policy } from '@/models/policy';

const AddPolicyButton = ({ fetchPolicies }: { fetchPolicies : ()=>void}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

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
            id: policiesRef.id, // You may generate this ID if needed
            title: title,
            description: description,
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now(),
            comments: [],
        };

        try {
            // Adding the policy document to Firestore
            const docRef = await addDoc(policiesRef, newPolicy);

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
                        <Input placeholder="Enter policy title" />
                    </Form.Item>
                    <Form.Item
                        label="Policy Description"
                        name="description"
                        rules={[{ required: true, message: 'Please enter the policy description' }]}
                    >
                        <Input.TextArea rows={4} placeholder="Enter policy description" />
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
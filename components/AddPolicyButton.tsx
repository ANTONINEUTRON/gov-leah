'use client';
import React, { useState } from 'react';
import { Button, Modal, Input, Form } from 'antd';

const AddPolicyButton = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSubmit = (values: any) => {
        console.log('New Policy Submitted:', values);
        setIsModalVisible(false);
    };

    return (
        <div className=''>
            <Button type="primary" onClick={showModal}>
                Add Policy
            </Button>
            <Modal
                title="Add New Policy"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    layout="vertical"
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        label="Policy Title"
                        name="title"
                        rules={[{ required: true, message: 'Please enter the policy title' }]}
                    >
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

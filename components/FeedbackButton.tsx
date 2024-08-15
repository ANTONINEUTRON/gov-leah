'use client';

import React, { useState } from 'react';
import { Button, Modal, Input, Form } from 'antd';

const FeedbackButton = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSubmit = (values: any) => {
        console.log('Feedback Submitted:', values);
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Submit Feedback
            </Button>
            <Modal
                title="Submit Feedback"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    layout="vertical"
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        label="Your Feedback"
                        name="feedback"
                        rules={[{ required: true, message: 'Please enter your feedback' }]}
                    >
                        <Input.TextArea rows={4} placeholder="Write your feedback here..." />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default FeedbackButton;

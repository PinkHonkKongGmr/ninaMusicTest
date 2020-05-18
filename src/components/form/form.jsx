import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

const FormWrapper = (props) => {
    const { singUp } = props;
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const onFinish = (values) => {
        const key = `AIzaSyBdIBqv032DMbf5IEnfsDwXpPJw9IiYeKw`;
        const req = singUp
            ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`
            : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;
        fetch(req, {
            method: 'POST',
            body: JSON.stringify({ ...values, returnSecureToken: true }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res) => console.log('ответ', res));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="form_wrapper">
            {' '}
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Form.Item
                    label="Email"
                    name="email"
                    type="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default FormWrapper;

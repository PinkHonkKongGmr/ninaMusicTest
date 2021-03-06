import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Radio } from 'antd';
import { Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';

const FormWrapper = (props) => {
    const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem('key')));
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
            .then((res) => {
                localStorage.setItem('key', res.idToken);
                setIsAuth(true);
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const setStatus = () => {
        if (props.up) props.handlers.defineUpAsFalse();
        else props.handlers.defineUpAsTrue();
    };

    const toRender = isAuth ? (
        <Redirect to="/" />
    ) : (
        <div className="form_wrapper">
            {' '}
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Form.Item {...tailLayout}>
                    <Radio.Group value={'size'} onChange={setStatus}>
                        <Radio.Button value="large">Войти</Radio.Button>
                        <Radio.Button value="default">Зарегестрироваться</Radio.Button>
                    </Radio.Group>
                </Form.Item>

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
                        {props.action}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );

    return toRender;
};

export default FormWrapper;

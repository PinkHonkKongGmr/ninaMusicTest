import React from 'react';
import { Redirect } from 'react-router-dom';

const StartPage = () => {
    const hasKey = localStorage.getItem('key');
    const toRender = hasKey ? 'все збс!' : <Redirect to="/auth" />;

    return <div>{toRender}</div>;
};

export default StartPage;

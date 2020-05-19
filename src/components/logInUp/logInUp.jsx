import React, { useState } from 'react';
import FormWrapper from '../form';

const LogInUp = () => {
    const [up, setInOrUp] = useState(false);

    const defineUpAsFalse = () => setInOrUp(false);
    const defineUpAsTrue = () => setInOrUp(true);

    const action = up ? 'Зарегестрироваться' : 'Войти';
    return (
        <div className="sign_wrapper">
            <FormWrapper singUp={up} action={action} up={up} handlers={{ defineUpAsFalse, defineUpAsTrue }} />
        </div>
    );
};

export default LogInUp;

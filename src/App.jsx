import React from 'react';
import FormWrapper from './components/form';

const App = () => (
    <div>
        <FormWrapper singUp={true} />
        <FormWrapper singUp={false} />
    </div>
);

export default App;

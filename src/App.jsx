import React from 'react';
import StartPage from './components/startPage';
import LoginInUp from './components/logInUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
    <Router>
        <Switch>
            <Route path="/" component={StartPage} exact />
            <Route path="/auth" component={LoginInUp} />
        </Switch>
    </Router>
);

export default App;

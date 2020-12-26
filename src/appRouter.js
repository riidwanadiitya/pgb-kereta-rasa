import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import Tuangeun from './Page/Tuangeun';
import Inuman from './Page/Inuman';
import Kontak from './components/Kontak'

const AppRouter = () => (
    <Router>
        <div>
            <Route path="/" exact component={App} />
            <Route path="/Kontak" component={Kontak} />
            <Route path="/tuangeun" component={Tuangeun} />
            <Route path="/inuman" component={Inuman} />
        </div>
    </Router>
);

export default AppRouter;
// Updated routing paths and fixed import

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact'; // Fixed typo in import

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />   // Updated path
                <Route exact path='/portfolio' component={Home} />  // Updated path to render Home on /portfolio as well
                <Route exact path='/contact' component={Contact} />
            </Switch>
        </Router>
    );
}

export default App;
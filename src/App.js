import React from 'react';
// import logo from './logo.svg';
// import Navigiation from 'components/Navigation/index';
// import Search from './pages/Search/index.js';
import Routers from './app.router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    IndexRoute
} from "react-router-dom";
import Test from './pages/Test/index';

import Home from './pages/Home/index';

import AsyncComponent from './core/AsyncComponent';

// const Search = AsyncComponent(() => import('./pages/Search/index.js'));
import Search from './pages/Search/index.js';


function App() {
    return (
        <div className="App">
            <Router>
                <Test/>
                <Switch>
                    <IndexRoute component={Home}/>
                    <Route path="/search" component={Search}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

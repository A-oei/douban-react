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
} from "react-router-dom";
import Test from './pages/Test/index';


import AsyncComponent from './core/AsyncComponent';

const Search = AsyncComponent(() => import('./pages/Search/index.js')),
    Home = AsyncComponent(() => import('./pages/Home/index.js'));

// import Search from './pages/Search/index.js';

function App() {
    return (
        <div className="App">
            <Test/>
            <Switch>
                <Route path="/search" component={Search}/>
                <Route path="/home" component={Home}/>
                <Redirect to='/search'/>
            </Switch>
        </div>
    );
}

export default App;

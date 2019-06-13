import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";


import AsyncComponent from './core/AsyncComponent';

const Search = AsyncComponent(() => import('./pages/Search/index.js'));


function Routers() {
    return (
        <Router>
            <Switch>
                <Route path="/hot" component={Search}/>
            </Switch>
        </Router>
    )
}

export default Routers;

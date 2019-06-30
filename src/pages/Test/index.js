import React, {Component} from 'react';
import 'style/navigation.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect,
    withRouter
} from "react-router-dom";


// import AsyncComponent from '../../core/AsyncComponent';

import Search from '../../pages/Search/index';


// const Search = AsyncComponent(() => import('../../pages/Search/index.js'));


class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    onClick() {
        this.props.history.push('/search');
        console.log(this.props);
    }

    render() {
        return (
            <Router>
                <div className='douban-nav ignore'>
                    <div className='nav-logo ignore'>
                        <NavLink to='/home' className='logo ignore'>
                            豆瓣
                        </NavLink>
                        <NavLink to='/search' className='search ignore'/>
                    </div>
                    <a className="nav-login ignore"
                       href='https://www.douban.com/doubanapp/dispatch?copy_open=1&from=mdouban&download=1&model=B&copy=1&page=&channel=m_ad_nav&uri=%2F'>
                        打开豆瓣App
                    </a>

                    <Route path="/search" component={Search}/>

                </div>
            </Router>
        )
    }
}

const Nav = withRouter(Navigation);

export default Nav;

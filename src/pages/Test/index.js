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

    clickPush() {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div className='douban-nav ignore'>
                <div className='nav-logo ignore'>
                    <span className='logo ignore' onClick={this.clickPush.bind(this)}>
                        豆瓣
                    </span>
                    <NavLink to='/search' className='search ignore'/>
                </div>
                <a className="nav-login ignore"
                   href='https://www.douban.com/doubanapp/dispatch?copy_open=1&from=mdouban&download=1&model=B&copy=1&page=&channel=m_ad_nav&uri=%2F'>
                    打开豆瓣App
                </a>
            </div>
        )
    }
}

const Nav = withRouter(Navigation);

export default Nav;

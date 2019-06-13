import React from 'react';
import 'style/navigation.scss';
import {withRouter} from 'react-router-dom';


let Navigation = (props) => (
    <div className='douban-nav ignore'>
        <div className='nav-logo ignore'>
            <a href="https://m.douban.com/" className='logo ignore'>
                豆瓣
            </a>
            <span className='search ignore'>
            </span>
        </div>
        <a className="nav-login ignore"
           href='https://www.douban.com/doubanapp/dispatch?copy_open=1&from=mdouban&download=1&model=B&copy=1&page=&channel=m_ad_nav&uri=%2F'>
            打开豆瓣App
        </a>
    </div>
)

export default withRouter(Navigation);

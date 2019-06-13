import React from 'react';
import './index.scss';

let Search = (props) => (
    <div className='douban-search'>
        <header className='search-header'>
            <span className='header-close'>关闭</span>
            <form className='ignore'>
                <input type="search" className='ignore'/>
            </form>
        </header>
        <main className='search-content'>
            <ul>
                {
                    searchLists.map(item =>
                        <li className='search-item ignore'>
                            <span style={{color: item.color}}
                                  className='item-title ignore'>
                                {item.title}
                            </span>
                            <footer className='item-introduction'>
                                {item.introduction}
                            </footer>
                        </li>
                    )
                }
            </ul>
        </main>
        <nav className='search-footer ignore'>
            <div>
                <a href='http://accounts.douban.com/passport/login?redir=https://m.douban.com/'>登录豆瓣</a>
            </div>

            <div>
                <a href='https://m.douban.com/to_pc/?url=https%3A%2F%2Fm.douban.com%2F'>使用桌面版</a>
                <a href='https://www.douban.com/doubanapp/dispatch?copy_open=1&from=mdouban&download=1&model=B&copy=1&page=&channel=m_ad_nav&uri=%2F'>使用豆瓣App</a>
            </div>
        </nav>
    </div>
)

let searchLists = [
    {title: '电影', color: 'rgb(35, 132, 232)', introduction: '影院热映'},
    {title: '电视', color: 'rgb(122, 106, 219)', introduction: '正在热播'},
    {title: '图书', color: 'rgb(159, 120, 96)', introduction: '畅销排行'},
    {title: '同城', color: 'rgb(230, 70, 126)', introduction: '周末活动'},
    {title: '小组', color: 'rgb(42, 184, 204)', introduction: '志趣相投'},
    {title: '音乐', color: 'rgb(244, 143, 46)', introduction: '新碟榜'},
    {title: '阅读', color: 'rgb(159, 120, 96)', introduction: '电子书'},
    {title: '游戏', color: 'rgb(87, 116, 197)', introduction: '虚拟世界'},
    {title: '应用', color: 'rgb(89, 108, 221)', introduction: '玩手机'},
    {title: '广播', color: 'rgb(225, 100, 77)', introduction: '友邻动态'},
    {title: 'FM', color: 'rgb(64, 207, 169)', introduction: '红心歌单'},
    {title: '豆品', color: 'rgb(66, 189, 86)', introduction: '生活美学'},
]

export default Search;

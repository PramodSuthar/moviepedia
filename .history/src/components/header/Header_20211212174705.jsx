import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.scss'

import logo from '../../assets/movie.png'

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    },
];

const Header = () => {

    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex(e => e.path === pathname);

    return (
        <div ref={headerRef} className='header'>
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <Link to='/'>Moviepedia</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>

                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Header
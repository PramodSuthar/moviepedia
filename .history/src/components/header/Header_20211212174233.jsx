import React from 'react';

import { Link, useLocation } from 'react-router-dom'

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
    return (
        <div>
            Header
        </div>
    )
}

export default Header

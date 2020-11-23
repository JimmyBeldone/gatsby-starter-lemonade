import { Link } from 'gatsby';
import React from 'react';

import './Nav.styl';

import { routes } from '../../../constants/router';

const Nav = () => (
    <div id='main-nav'>
        {routes
            .filter((route) => route.nav !== false)
            .map((route, i) => (
                <Link key={route.name + i} to={route.path}>
                    {route.name}
                </Link>
            ))}
    </div>
);

export default Nav;

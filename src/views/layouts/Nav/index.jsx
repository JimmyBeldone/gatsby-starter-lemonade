import { Link } from 'gatsby';
import React from 'react';

import './Nav.styl';

import { routes } from '../../../constants/router';

const Nav = () => (
    <div id='main-nav'>
        {routes
            .filter((route) => route.nav !== false)
            .map((route) => (
                <Link key={route.name} to={route.path}>
                    {route.name}
                </Link>
            ))}
    </div>
);

export default Nav;

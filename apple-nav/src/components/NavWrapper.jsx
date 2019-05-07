import React from 'react'
import './Navigation.css';
import Nav from './Nav';

import {Route} from 'react-router-dom'


const NavWrapper = () => {
    // const NavigationBackground = require('./Nav-background.png')
    return (
        <div>
            <Route path="/Nav" component={Nav} />
        </div>
    )
}

export default NavWrapper
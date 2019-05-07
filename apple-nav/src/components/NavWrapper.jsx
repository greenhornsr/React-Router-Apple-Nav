import React from 'react'
import './Navigation.css';

import {NavLink} from 'react-router-dom'


const NavWrapper = () => {
    // const NavigationBackground = require('./Nav-background.png')
    return (
        <div className="prime-nav-bar">
            <img src="" alt=""/>
            <NavLink className="pnavs tag1 sprite-bg" to="">Mac</NavLink>
            <NavLink className="pnavs tag2 sprite-bg" to="">Ipad</NavLink>
            <NavLink className="pnavs tag3 sprite-bg" to="">Iphone</NavLink>
            <NavLink className="pnavs tag4 sprite-bg" to="">Watch</NavLink>
            <NavLink className="pnavs tag5 sprite-bg" to="">TV</NavLink>
            <NavLink className="pnavs tag6 sprite-bg" to="">Music</NavLink>
            <NavLink className="pnavs tag7 sprite-bg" to="">Support</NavLink>
            <img src="" alt=""/>
            <img src="" alt=""/>
            {/* <img className ="sprite-img" src={NavigationBackground} alt="Apple-Navigation-Sprite"/> */}
        </div>
        
    )
}

export default NavWrapper
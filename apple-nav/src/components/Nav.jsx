import React from 'react'
import {Route,NavLink} from 'react-router-dom'


const Nav = () => {
    return (
        <div className="prime-nav-bar">
            <img src="" alt=""/>
            <NavLink className="pnavs tag1 sprite-bg" to="/Nav">Mac</NavLink>
            <NavLink className="pnavs tag2 sprite-bg" to="/Nav">Ipad</NavLink>
            <NavLink className="pnavs tag3 sprite-bg" to="/Nav">Iphone</NavLink>
            <NavLink className="pnavs tag4 sprite-bg" to="/Nav">Watch</NavLink>
            <NavLink className="pnavs tag5 sprite-bg" to="/Nav">TV</NavLink>
            <NavLink className="pnavs tag6 sprite-bg" to="/Nav">Music</NavLink>
            <NavLink className="pnavs tag7 sprite-bg" to="/Nav">Support</NavLink>
            <img src="" alt=""/>
            <img src="" alt=""/>
            {/* <img className ="sprite-img" src={NavigationBackground} alt="Apple-Navigation-Sprite"/> */}
        </div>
    )
}

export default Nav
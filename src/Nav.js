import React from 'react'
import { Link, withRouter } from "react-router-dom";
function Nav() {
    const navstyle={
        color:'white'
    }
    const num=Math.random()
    var link="/dynamic/"+num.toString();
    return (
        <nav>
            <Link  style={navstyle} to='/'>
            <h3>Logo</h3>
            </Link>
            <ul className="nav_links">
                <Link style={navstyle}to='/about'>
                <li>About</li>
                </Link>
                <Link  style={navstyle} to='/shop'>
                <li>Shop</li>
                </Link>
                <Link style={navstyle}to={link}>
                <li>Dynamic</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav

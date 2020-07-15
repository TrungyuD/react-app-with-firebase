import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = props => {
    
    return (
        <div>
            <ul className="right">
                <li><NavLink to="/">Signup</NavLink></li>
                <li><NavLink to="/">Login</NavLink></li>
                
            </ul>
        </div>
    )
    
}
export default SignedOutLinks;

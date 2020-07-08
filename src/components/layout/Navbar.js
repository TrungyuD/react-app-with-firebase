import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks'
const Navbar = props => {
    
    return (
        <div>
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">TrungDuyADC</Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>
        </div>
    )
}

export default Navbar;

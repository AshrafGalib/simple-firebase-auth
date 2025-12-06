import React from 'react';
import { NavLink } from 'react-router';
import './Navbar.css'
const Navbar = () => {
    return (
        <div >
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/Login'>Login</NavLink>
        </div>
    );
};

export default Navbar;
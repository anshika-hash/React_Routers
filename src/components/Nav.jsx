import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return ( 

        <>
        <h1>Navbar</h1>
        <NavLink exact to='/' activeClassName="active_class"> Home</NavLink>
        <NavLink exact to='/about' activeClassName="active_class"> About</NavLink>
        <NavLink exact to='/contact' activeClassName="active_class"> Contact</NavLink>
        <NavLink exact to='/services' activeClassName="active_class"> Services</NavLink>
        <NavLink exact to='/form' activeClassName="active_class"> Form</NavLink>
        
        </>
     );
}

export default Nav;
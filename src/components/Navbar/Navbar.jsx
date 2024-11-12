import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../MainLayout/MainLayout';

const Navbar = () => {
    const {handleLogout} = useContext(authContext)
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about" style={{marginLeft:"20px"}}>About</NavLink>
            <NavLink to="/signin" style={{marginLeft:"20px"}}>login</NavLink>
            <NavLink to="/profile" style={{marginLeft:"20px"}}>profile</NavLink>
            <NavLink to="/stats" style={{marginLeft:"20px"}}>stats</NavLink>
            <button onClick={handleLogout}>logout</button>
        </div>
    );
};

export default Navbar;
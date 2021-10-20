import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = props =>{
    return(
        <ul className="nav_links">
            <li className="nav_link">
                <NavLink to="/" exact>Home</NavLink>
            </li>
            <li className="nav_link">
                <NavLink to="/about" exact>About-us</NavLink>
            </li>
            <li className="nav_link">
                <NavLink to="/services" exact>Services</NavLink>
            </li>
            <li className="nav_link">
                <NavLink to="/contact" exact>Contact-us</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;
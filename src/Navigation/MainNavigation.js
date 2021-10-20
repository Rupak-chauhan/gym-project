import React from "react";
import { NavLink } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

const MainNavigation = props =>{
    return(
        <MainHeader>
            <h1>
                <NavLink to="/" exact>
                    Fitness
                </NavLink>
            </h1>

            <nav className="nav-items">
                <NavLinks />
            </nav>
        </MainHeader>
    )
};

export default MainNavigation;
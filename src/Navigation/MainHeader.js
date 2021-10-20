import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BackdropComponent from "./BackdropComponent";
import './MainHeader.css';
import MainNavigation from "./MainNavigation";
import SideDrawer from "./SideDrawer";

const MainHeader = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () =>{
        setDrawerIsOpen(true);
    }
    const closeDrawer = () =>{
        setDrawerIsOpen(false);
    }
    return(
        <React.Fragment>
            {drawerIsOpen && <BackdropComponent onClick={closeDrawer}/>}
            {drawerIsOpen &&(
            <SideDrawer onClick={closeDrawer}>
            <nav class="mobile-nav">
            <ul class="mobile-nav_items">
                <li class="mobile-nav_item">
                <NavLink to="/" exact>Home</NavLink>
                </li>
                <li class="mobile-nav_item">
                <NavLink to="/aboutus">About-Us</NavLink>
                </li>
                <li class="mobile-nav_item">
                <NavLink to="/aboutus">Services</NavLink>
                </li>
                <li class="mobile-nav_item">
                <NavLink to="/contactus">Contact-Us</NavLink>
                </li>
            </ul>
        </nav>
            </SideDrawer>
    )}
        <header className="main-header">
           <h1>
               <a href="#">Fitness</a>
           </h1>
           <nav>
               <ul className="nav-items">
                   <li className="nav-item">
                       <NavLink to="/" exact>Home</NavLink>
                   </li>
                   <li className="nav-item">
                       <NavLink to="/aboutus">About-Us</NavLink>
                   </li>
                   <li className="nav-item">
                       <NavLink to="/services">Services</NavLink>
                   </li>
                   <li className="nav-item">
                       <NavLink to="/contactus">Contact-Us</NavLink>
                   </li>
               </ul>
           </nav>
           <button class="toggle-button" onClick={openDrawer}>
               <span class="toggle-button_bar"></span>
                <span class="toggle-button_bar"></span>
                <span class="toggle-button_bar"></span>
           </button>  
            
        </header>
        
        </React.Fragment>
    );
};

export default MainHeader;
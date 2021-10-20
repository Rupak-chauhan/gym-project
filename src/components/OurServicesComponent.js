import React from "react";
import './Ourcomponent.css';
import AboutbackgroundComponent from "./AboutBackgroundComponent";
import OurServicesContent from "./OurServicesContent";

const OurSevicesComponent = () =>{
    return(
        <React.Fragment>
            <AboutbackgroundComponent />
            <OurServicesContent/>
        </React.Fragment>
    );
};

export default OurSevicesComponent;
import React from "react";
import AboutbackgroundComponent from "./AboutBackgroundComponent";
import AboutContentComponent from "./AboutContentComponent";
import './Aboutus.css';

const AboutUsComponent = () =>{
    return(
        <React.Fragment>
        <AboutbackgroundComponent />
        <AboutContentComponent />
        </React.Fragment>
    );
};

export default AboutUsComponent;
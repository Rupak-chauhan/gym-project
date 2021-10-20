import React from "react";
import AboutbackgroundComponent from "./AboutBackgroundComponent";
import AboutContentComponent from "./AboutContentComponent";
import BackgroundComponent from "./BackgroundComponent";
import './BackgroundComponent.css';
import ContactContentComponent from "./ContactContentComponent";
import CoursesComponent from "./CoursesComponent";
import FooterComponent from "./FooterComponent";
import OurServicesContent from "./OurServicesContent";
import PricingComponent from "./PricingComponent";

const HomeComponent = () => {
    return(
        <React.Fragment>
        <BackgroundComponent />
        <CoursesComponent />
        <PricingComponent />
        </React.Fragment>
    );
};

export default HomeComponent;
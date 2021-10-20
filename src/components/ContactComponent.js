import React from "react";
import AboutbackgroundComponent from "./AboutBackgroundComponent";
import './Contact.css';
import ContactContentComponent from "./ContactContentComponent";

const ContactComponent =() =>{
    return(
        <React.Fragment>
            <AboutbackgroundComponent />
            <ContactContentComponent />
        </React.Fragment>
    );
};

export default ContactComponent;
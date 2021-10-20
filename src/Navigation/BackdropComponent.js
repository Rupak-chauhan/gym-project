import React from "react";
import './Backdrop.css';

const BackdropComponent = props =>{
    return(
        <div className="backdrop" onClick={props.onClick}></div>
    );
};

export default BackdropComponent;
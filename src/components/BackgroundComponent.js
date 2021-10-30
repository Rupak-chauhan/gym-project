import React from "react";
import './BackgroundComponent.css';
import Typical from  'react-typical';

const BackgroundComponent = () =>{
    return(
      <div className="back-image">
          <div className="intro" >
          <h1  data-aos="zoom-in-up">
              <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                'Make your body perfect and start the workout today.',
                2000
              ] }
              />

              
          </h1>
          <p  data-aos="zoom-in-up">
          WE Help people to make them fit with the best of trainers around us.just
          take a chance to get into it.You just need to get started with it.just start the subscription today and be a part of it.
          </p>
          <button className="back-btn" data-aos="zoom-in-up">
              Contact-Us
          </button>
          </div>
          
      </div>  
    );
};

export default BackgroundComponent;
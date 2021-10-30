import React from "react";
import './Pricing.css';

const PricingComponent = () =>{ 
    return(
        <React.Fragment>
        <div className="pricing-container" data-aos="zoom-in">
            <h1>PRICING PLANS(per month)</h1>
            <div className="plans">
                <div className="standard">
                    <h4 class="plans-heading">Standard</h4>
                    <div class="abc">
                    <ul className="list-items">
                        <li className="list-item">Free Hand</li>
                        <li className="list-item">Gym Fitness</li>
                        <li className="list-item">Running</li>
                    </ul>
                    <h1>$30</h1>
                    </div>
                </div>
                <div className="advanced">
                <h4>Advanced</h4>
                    <div className="abc">
                        <ul className="list-items">
                            <li className="list-item">Free Hand</li>
                            <li className="list-item">Gym Fitness</li>
                            <li className="list-item">Running</li>
                            <li className="list-item">Yoga</li>
                        </ul>
                        <h1>$30</h1>
                    </div>
                    
                </div>
                <div className="premium">
                <h4>Premium</h4>
                    <div class="abc">
                        <ul className="list-items">
                            <li className="list-item">Free Hand</li>
                            <li className="list-item">Gym Fitness</li>
                            <li className="list-item">Running</li>
                            <li className="list-item">Yoga</li>
                            <li className="list-item">Stunt</li>
                        </ul>
                        <h1>$50</h1>
                    </div>
                </div>
            </div>
        </div>

        <div className="test">
        <h1 className="heading">TESTIMONIALS</h1>
        <div className="testimonial-container">
            
            <div className="user-one">
                <img src="../image/boy.jpg" alt="pic" height="150px" width="150px" />
                <div className="user-detail">
                    <h1>Mayank S.</h1>
                    <h6>Actor/Public</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id blandit diam, id vulputate orci. 
                        In tortor nunc.
                    </p>
                </div>
            </div>

            <div className="user-one">
                <img src="../image/boy.jpg" alt="pic"  height="150px" width="150px"/>
                <div className="user-detail">
                    <h1>R.S Shukla</h1>
                    <h6>Politician/Public</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id blandit diam, id vulputate orci. 
                        In tortor nunc.
                    </p>
                </div>
            </div>
        </div>
        </div>
        </React.Fragment>
    );
};

export default PricingComponent;
import React from "react";
import './Footer.css';

const FooterComponent = () =>{
    return(
        <footer class="footer-container">
            <div class="footer-items">
            <div class="social">
                <a href="www.twitter.com">
                    <img class="social-img" src="image/whatsapp.png" alt="twitter" height="30px" width="30px"/>
                </a>
                <a href="www.twitter.com">
                    <img class="social-img" src="image/linkedin.png" alt="twitter" height="30px" width="30px" />
                </a>
                <a href="www.twitter.com">
                    <img class="social-img" src="image/github.png" alt="twitter" height="30px" width="30px" />
                </a>
                <a href="www.twitter.com">
                    <img class="social-img" src="image/whatsapp.png" alt="twitter" height="30px" width="30px" />
                </a>
            </div>
            <div class="footer-navigation">
                <ul className="footer_nav-items">
                    <li className="footer_nav-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="footer_nav-item">
                    <a href="#">About-us</a>
                    </li>
                    <li className="footer_nav-item">
                    <a href="#">Contact-us</a>
                    </li>
                    <li className="footer_nav-item">
                    <a href="#">Services</a>
                    </li>
                </ul>
            </div>
            <div class="footer-content">
                <p>
                You are at the right place if you want to make you body fit and perfect, a a a a a  just choose any plans 
                of above mentioned and get started.
                </p>
            </div>
            <div class="footer-contact">
                <p>
                C-scheme, Vaishali Nagar near Shallby hospital, Jaipur.
                </p>
            </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
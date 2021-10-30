import React from "react";
import { FaPhoneAlt, FaAt, FaHome } from "react-icons/fa";
import './contactcontent.css';

const ContactContentComponent = () =>{
    return(
        <div class="contact-container">
            <div class="general-info">
                <h1>FEEL FREE TO REACH TO US ANYTIME</h1>
                <div class="call-container">
                    <a href="tel:5551234567" className="call-link"><FaPhoneAlt style={{color: 'green'}} /></a>
                    <a href="tel:5551234567">+1-122-456789</a>
                </div>
                <div class="mail-container">
                    <a href = "mailto: abc@example.com" className="mail-link"><FaAt style={{color: 'red'}} /></a>
                    <a href="">support@gym.com</a>
                </div>
                <div class="address-container">
                    <a href="" className="add-link"><FaHome style={{color: ''}} /></a>
                    <a href="">123, raja park, Jaipur.</a>
                </div>
            </div>
            <div class="contact-form">
                <form data-aos="zoom-in">
                    <input type="text" name="uname" id="uname" placeholder="Your Name" />
                    <input type="tel" name="unumber" id="unumber" placeholder="Your Mob. Number" />
                    <input type="email" name="umail" id="umail" placeholder="Your e-mail" />
                    <textarea rows="6" name="message" placeholder="Ask Your Question" id="umessage" />
                    <button role="button" type="submit" data-aos="flip-right">SUBMIT FORM</button>
                </form>
            </div>
            
        </div>
    );
};

export default ContactContentComponent;
import React from "react";
import './Aboutcontent.css';

const AboutContentComponent = () =>{
    return(
        <div class="about_content-container">
        <div class="about_content-story">
            <h1 class="about_content-heading">OUR STORY</h1>
            <div class="about_content-group">
            <p class="about_content-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis ac risus sed consequat. 
            Maecenas imperdiet vestibulum diam, sit amet aliquam mauris porta ut. Fusce vitae tortor ac neque porttitor 
            eleifend. Curabitur a enim ac nunc finibus ultricies quis nec mi. Nunc non ex eu magna volutpat pretium. 
            Aliquam commodo, nisl quis pellentesque ultricies, magna nibh rutrum lorem, aliquet vehicula diam nibh eget 
            sem. Proin malesuada sagittis finibus. Integer ultrices sapien libero, in sagittis nibh tincidunt at. 
            Pellentesque in sem vel nibh aliquam condimentum. Nunc consectetur nunc eget turpis vulputate aliquet. 
            Nam risus enim, sagittis nec nibh ac, rhoncus venenatis nibh. Nam dictum, tellus non pharetra feugiat, m
            auris leo consectetur nisi, 
            eu congue nunc arcu sed ligula. Morbi gravida varius turpis, vitae feugiat nisl maximus quis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis ac risus sed consequat. 
            Maecenas imperdiet vestibulum diam, sit amet aliquam mauris porta ut. Fusce vitae tortor ac neque porttitor 
            eleifend. Curabitur a enim ac nunc finibus ultricies quis nec mi. Nunc non ex eu magna volutpat pretium. 
            
            </p>
            <img class="story-img" src="../image/boy.jpg" alt="pic" height="160px" width="280px"/>
            </div>
            
        </div>
        <div class="our-management">
            <h1>OUR MANAGEMENT:</h1>
            
            <div class="management-group">
                <div class="pic-group">
                <img class="management-pic" src="../image/boy.jpg" alt="pic" height="180px" width="230px"/>
                <caption>Founder.</caption>
                <h4>Nishant sharma</h4>
                <hr/>
                </div>
                <div class="pic-group">
                <img class="management-pic" src="../image/boy.jpg" alt="pic" height="180px" width="230px"/>
                <caption>Trainer Head</caption>
                <h4>S.Shukla</h4>
                <hr/>
                </div>
                <div class="pic-group">
                <img class="management-pic" src="../image/boy.jpg" alt="pic" height="180px" width="230px"/>
                <caption>Help Desk</caption>
                <h4>M.Pathak</h4>
                <hr/>
                </div>
                <div class="pic-group">
                <img class="management-pic" src="../image/boy.jpg" alt="pic" height="180px" width="230px"/>
                <caption>Manager.</caption>
                <h4>P.Joshi</h4>
                <hr/>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutContentComponent;
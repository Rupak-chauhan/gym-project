import React from "react";
import { FaWeight } from "react-icons/fa";
import './Courses.css';

const CoursesComponent = () =>{
    return(
        <React.Fragment>
            <h1 style={{textAlign:'center', marginTop:'50px'}}>OUR COURSES</h1>
        <div className="course-container">
            
            <div className="weight-lifting">
                <FaWeight style={{color:'red', fontSize:'34px'}}/>
                <h4>Lorem Ipsum</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id blandit diam, 
                    id vulputate orci. 
                        In tortor nunc.
                </p>
            </div>
            <div className="kettle">
            <FaWeight style={{color:'red', fontSize:'34px'}}/>
                <h4>Lorem Ipsum</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id blandit diam, 
                    id vulputate orci. 
                        In tortor nunc.
                </p>
            </div>
            <div className="AbsWorkout">
            <FaWeight style={{color:'red', fontSize:'34px'}}/>
                <h4>Lorem Ipsum</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id blandit diam, id vulputate orci. 
                        In tortor nunc.
                </p>
            </div>
            <div className="gymnastic">
            <FaWeight style={{color:'red', fontSize:'34px'}}/>
                <h4>Lorem Ipsum</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id blandit diam, id vulputate orci. 
                        In tortor nunc.
                </p>
            </div>
            <div className="running">
            <FaWeight style={{color:'red', fontSize:'34px'}}/>
                <h4>Lorem Ipsum</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id blandit diam, id vulputate orci. 
                        In tortor nunc.
                </p>
            </div>
            <div className="belly">
            <FaWeight style={{color:'red', fontSize:'34px'}}/>
                <h4>Lorem Ipsum</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id blandit diam, id vulputate orci. 
                        In tortor nunc.
                </p>
            </div>
        </div>

        <div className="expert-view">
            <div className="content">
            <h1>EXPERT COACHES</h1>
            <p>Learn all courses with our team of expert coaches.
            Learn all courses with our team of expert coaches.Learn all courses with our team of expert coaches.
            Learn all courses with our team of expert coaches.
            </p>
            </div>
        </div>
        </React.Fragment>
    );
};

export default CoursesComponent;
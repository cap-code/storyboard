import React from 'react';
import test from '../assets/moun.jpg';

const ProjectSummary =()=>{
    return(

        <div className="card medium  project-summary">
        <div className="card-image">
            <img src={test} alt="palceholder"/>
            <span className="card-title">Card Title</span>
          </div>
          <div className="card-content grey-text text-darken-3">
            <span className="card-title ">Project title</span>
            <p>Posted by The Net Ninja</p>
            <p className="grey-text">3rd September, 2am</p>
          </div>
        </div>
    )
}

export default ProjectSummary
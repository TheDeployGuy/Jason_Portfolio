import React from 'react';

// Use a Functional Components
function ProjectItem(props){
    return (
        <div className="ProjectsItem">
            <div className="col-md-4">
                <a href="#"><img alt={props.project.projectTitle} src={props.project.projectImg} className="circularImage" /></a>
                <h4>{props.project.projectTitle}</h4>
            </div>
            {/*<div className="col-md-7 leftAlign">
                <h2>{props.project.projectTitle}</h2>
                <p>{props.project.projectDesc}</p>
            </div>*/}
        </div>
    );
}

export default ProjectItem;

import React from 'react';

// Use a Functional Components
function ProjectItem(props){
    return (
        <div className="ProjectsItem">
            <div className="col-md-4">
                <a href={props.project.link}><img alt={props.project.projectTitle} src={props.project.projectImg} className="projectImage" /></a>
                <h3>{props.project.projectTitle}</h3>
                <h4>{props.project.projectDesc}</h4>
                <h5><b>Technologies:{props.project.projectTechnologies}</b></h5>
            </div>
        </div>
    );
}

export default ProjectItem;

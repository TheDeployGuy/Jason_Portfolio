import React from 'react';

// Use a Functional Components
function ProjectItem(props){
    return (
        <div className="ProjectsItem leftAlign">
            <div className="row">
                <div className="col-md-4">
                    <a href={props.project.link}><img alt={props.project.projectTitle} src={props.project.projectImg} className="projectImage" /></a>
                </div>
                <div className="col-md-8">
                    <h3>{props.project.projectTitle}<small> - {props.project.projectDesc}</small></h3>
                    <h4>{props.project.projectDetail}</h4>
                    <h4><b>Technologies:{props.project.projectTechnologies}</b></h4>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;

import React from 'react';

// Use a Functional Components
function ProjectItem(props){
    return (
        <div className="ProjectsItem">
            <div className="col-md-4">
                <div className="imgContainer">
                    {/*<a href="#"><img alt={props.project.projectTitle} src={props.project.projectImg} className="circularImage" /></a>*/}
                    <div id="card">
                            <figure className="front"><a href="#" className="front"><img alt={props.project.projectTitle} src={props.project.projectImg} className="circularImage" /></a></figure>
                            <figure className="back">Test</figure>
                    </div>
                </div>
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

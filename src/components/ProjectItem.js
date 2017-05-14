import React from 'react';

// Use a Functional Components
function ProjectItem(props){
    return (
        <div className="ProjectsItem">
            <div className="col-md-4">
                <div className="imgContainer">
                    {/*<a href="#"><img alt={props.project.projectTitle} src={props.project.projectImg} className="circularImage" /></a>*/}
                    <div id="card">
                            <a href={props.project.link}><img alt={props.project.projectTitle} src={props.project.projectImg} className="circularImage projectImg" /></a>
                            <div className="back">
                                <div className="row projectText">
                                    <div className="col-md-offset-2 col-md-7">
                                        {props.project.projectDesc}
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <h4>{props.project.projectTitle}</h4>
                <h5><b>{props.project.projectTechnologies}</b></h5>
            </div>
            {/*<div className="col-md-7 leftAlign">
                <h2>{props.project.projectTitle}</h2>
                <p>{props.project.projectDesc}</p>
            </div>*/}
        </div>
    );
}

export default ProjectItem;

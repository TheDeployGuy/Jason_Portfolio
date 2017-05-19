import React from 'react';

// Use a Functional Components
function ProjectItem(props){
    let imgItems;

    if(props.project.projectTechnologiesImgLinks){
        imgItems = props.project.projectTechnologiesImgLinks.map(img => {
            return (
                // Convert this to functional component
                <img key={Math.random() * 100} alt={img} src={img} className="techImage" />
            );
        });
    }
    return (
        <div className="ProjectsItem">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <a href={props.project.link}><img alt={props.project.projectTitle} src={props.project.projectImg} className="projectImage" /></a>
                </div>
                <div className="col-md-8 text-left">
                    <h3>{props.project.projectTitle}<small> - {props.project.projectDesc}</small></h3>
                    <h4>{props.project.projectDetail}</h4>
                    {imgItems}
                </div>
            </div>
            <hr className="projectHR"/>
        </div>
    );
}

export default ProjectItem;

import React from 'react';

// Use a Functional Components
function ProjectItem(props){
    let imgItems;

    if(props.project.projectTechnologiesImgLinks){
        imgItems = props.project.projectTechnologiesImgLinks.map(img => {
            return (
                // Convert this to functional component
                <img key={img} alt={img} src={img} className="techImage" />
            );
        });
    }
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
                    {imgItems}
                    {/*<img alt="mean_stack" src="img/mongo_db.jpeg" className="techImage" />
                    <img alt="mean_stack" src="img/expressjs.png" className="techImage" />
                    <img alt="mean_stack" src="img/angular_2.jpg" className="techImage" />
                    <img alt="mean_stack" src="img/nodejs_2.png" className="techImage" />*/}
                </div>
            </div>
            <hr className="projectHR"/>
        </div>
    );
}

export default ProjectItem;

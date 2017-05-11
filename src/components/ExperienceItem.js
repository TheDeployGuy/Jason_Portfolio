import React from 'react';

function ExperienceItem(props){
    return (
        <div className="row">
            <div className="col-md-4">
                <img alt={props.experience.experienceTitle} src={props.experience.experienceImg} className="circularImage" />
            </div>
            <div className="col-md-8">
                <h2>{props.experience.experienceTitle}</h2>
                <p>{props.experience.experienceDesc}</p>
            </div>
        </div>
    );
}

export default ExperienceItem;
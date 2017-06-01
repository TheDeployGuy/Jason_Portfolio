import React, { PropTypes } from 'react';

// Use a Functional Components
function ProjectItem(props) {
  let imgItems;

  const {
      project: {
          projectTitle,
          link,
          projectImg,
          projectDetail,
          projectDesc,
          projectTechnologiesImgLinks,
      },
  } = props;

  if (projectTechnologiesImgLinks) {
    imgItems = projectTechnologiesImgLinks.map(img => (
                // Convert this to functional component
      <img key={img.substring(0, img.indexOf('.'))} alt={img} src={img} className="techImage" />
            ));
  }
  return (
    <div className="ProjectsItem">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <a href={link}><img alt={projectTitle} src={projectImg} className="projectImage" /></a>
        </div>
        <div className="col-md-8 text-left">
          <h3>{projectTitle}<small> - {projectDesc}</small></h3>
          <h4>{projectDetail}</h4>
          {imgItems}
        </div>
      </div>
      <hr className="projectHR" />
    </div>
  );
}

export default ProjectItem;

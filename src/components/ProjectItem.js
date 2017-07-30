import React from 'react';
import PropTypes from 'prop-types';

// Use a Functional Components
function ProjectItem(props) {
  let techItems;

  const techStyle = {
    marginRight: '20px',
    fontSize: '17px',
    padding: '10px',
  };

  const techSection = {
    marginTop: '25px',
  };

  const {
      project: {
          projectTitle,
          link,
          projectImg,
          projectDetail,
          projectDesc,
          projectTechnologies,
      },
  } = props;

  if (projectTechnologies) {
    techItems = projectTechnologies.map(tech => (
      <kbd key={tech} style={techStyle}>{tech}</kbd>
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
          <hr />
          <h4>{projectDetail}</h4>
          <h4 style={techSection}>Technologies: {techItems} </h4>
        </div>
      </div>
      <hr className="projectHR" />
    </div>
  );
}

export default ProjectItem;

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
};

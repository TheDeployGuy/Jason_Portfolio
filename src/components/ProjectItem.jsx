import React from 'react';
import PropTypes from 'prop-types';

const ProjectItem = ({
  project: {
    projectTitle,
    link,
    projectImg,
    projectDetail,
    projectDesc,
    projectTechnologies,
  },
}) => (
  <div className="ProjectsItem">
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-4">
        <a href={link}><img alt={projectTitle} src={projectImg} className="project-image" /></a>
      </div>
      <div className="col-md-12 col-lg-8">
        <h2>{projectTitle}</h2>
        <h4>{projectDesc}</h4>
        <hr />
        <h5>{projectDetail}</h5>
        <div className="row" style={{ marginTop: '25px' }}>
          { projectTechnologies.map(tech => (
            <div key={tech} className="col-sm-4 col-md-4 col-lg-3">
              <h3>
                <kbd style={{ fontSize: '17px', padding: '10px' }}>{tech}</kbd>
              </h3>
            </div>
            ))
          }
        </div>
      </div>
    </div>
    <hr className="hr--project--margin" />
  </div>
);

export default ProjectItem;

ProjectItem.propTypes = {
  project: PropTypes.shape({
    projectTitle: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    projectImg: PropTypes.string.isRequired,
    projectDetail: PropTypes.string.isRequired,
    projectDesc: PropTypes.string.isRequired,
    projectTechnologies: PropTypes.array.isRequired,
  }).isRequired,
};

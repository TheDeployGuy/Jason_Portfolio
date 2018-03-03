import React, { Fragment } from 'react';
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
  <Fragment>
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-4">
        <a href={link}><img alt={projectTitle} src={projectImg} className="project-image" /></a>
        <div className="row">
          { projectTechnologies.map(tech => (
            <div key={tech} className="col-sm-4 col-md-4 col-lg-6">
              <h3>
                <kbd style={{ fontSize: '17px', padding: '10px' }}>{tech}</kbd>
              </h3>
            </div>
            ))
          }
        </div>
      </div>
      <div className="col-md-12 col-lg-8">
        <h2>{projectTitle}</h2>
        <h4>{projectDesc}</h4>
        <hr />
        <h5>{projectDetail}</h5>
      </div>
    </div>
    <hr className="hr--project--margin" />
  </Fragment>
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

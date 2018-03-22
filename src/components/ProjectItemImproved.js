import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProjectItem = ({
  project: {
    projectTitle,
    link,
    projectImg,
    projectDetail,
    projectDesc,
    projectTechnologies,
  },
  isShown,
  index,
  handleClick,
}) => (
  <Fragment>
    <div className={isShown ? 'row mt-2' : 'col-4 mt-2'} style={{ order: isShown ? '-1' : '' }}>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-4">
          <button className="btn btn-link" onClick={() => handleClick(index)}>
            <ProjectImg alt={projectTitle} src="http://via.placeholder.com/300x200" />
          </button>
        </div>
        {
          isShown && (
            <div className="col-md-12 col-lg-8">
              <h2>{projectTitle}</h2>
              <h4>{projectDesc}</h4>
              <hr />
              <h5>{projectDetail}</h5>
            </div>
          )
        }
      </div>
    </div>
  </Fragment>
);

export default ProjectItem;

const ProjectImg = styled.img`
  height: 200px;
  width: 300px;
`;

ProjectItem.propTypes = {
  project: PropTypes.shape({
    projectTitle: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    projectImg: PropTypes.string.isRequired,
    projectDetail: PropTypes.string.isRequired,
    projectDesc: PropTypes.string.isRequired,
    projectTechnologies: PropTypes.array.isRequired,
  }).isRequired,
  isShown: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

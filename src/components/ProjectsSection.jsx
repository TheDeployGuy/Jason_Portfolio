import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';
import ProjectItemImproved from './ProjectItemImproved';

const OrangeHR = styled.hr`
  border-color: #F05F40 !important;
  border-width: 3px;
  max-width: 50px;
`;

const ProjectsSection = ({ projects }) => (
  <Fragment>
    <div className="header-content mt-4" id="PROJECTS">
      <h1>Projects</h1>
      <OrangeHR className="pt-5" />
      <div className="container">
        <div className="row">
          { projects.map(project => <ProjectItemImproved key={project.projectTitle} project={project} />)}
        </div>
      </div>
    </div>
  </Fragment>
);

ProjectsSection.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ProjectsSection;

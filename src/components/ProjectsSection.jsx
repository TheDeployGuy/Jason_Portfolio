import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

const ProjectsSection = ({ projects }) => (
  <section>
    <div className="header-content" id="PROJECTS">
      <h1>Projects</h1>
      <hr className="headerHR pt-5" />
      <div className="container">
        { projects.map(project => <ProjectItem key={project.projectTitle} project={project} />)}
      </div>
    </div>
  </section>
);

ProjectsSection.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ProjectsSection;

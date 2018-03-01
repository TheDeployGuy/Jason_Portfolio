import React from 'react';
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

export default ProjectsSection;

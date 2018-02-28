import React from 'react';
import ProjectItem from './ProjectItem';

// class ProjectsSection extends Component {
function ProjectsSection({ projects }) {
  // For each project we map though each element and create a ProjectItem component
  const projectItems = projects.map(project => (
    // onDelete has been set as a property that will call a function with its ID, in this case it uses an inline arrow function to create the onDeleteProps (could easily repalce this with a function)
    <ProjectItem key={project.projectTitle} project={project} />
  ));

  return (
    <section>
      <div className="header-content" id="PROJECTS">
        <h1>Projects</h1>
        <hr className="headerHR" />
        <div className="container">
          {projectItems}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

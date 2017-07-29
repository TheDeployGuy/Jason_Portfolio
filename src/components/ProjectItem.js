import React from 'react';

// Use a Functional Components
function ProjectItem(props) {
  let techItems;

  const techStyle = {
    marginRight: '20px',
    fontSize: '17px',
    padding: '10px',
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

  console.log(projectTechnologies.length);
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
          <h4>{projectDetail}</h4>
          {techItems}
        </div>
      </div>
      <hr className="projectHR" />
    </div>
  );
}

export default ProjectItem;

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProjectItem from './ProjectItemImproved';

const OrangeHR = styled.hr`
  border-color: #F05F40 !important;
  border-width: 3px;
  max-width: 50px;
`;

class ProjectsSection extends Component {

  state = {
    showProjects: this.props.projects.map(project => false)
  }

  onHandleClick(index) {
    const values = this.state.showProjects.map(val => false);
    values[index] = !this.state.showProjects[index];
    this.setState({
      showProjects: values
    })

  }

  render() {
    return (
      <Fragment>
      <div className="header-content mb-5 mt-5" id="PROJECTS">
        <h1>Projects</h1>
        <OrangeHR className="pt-5" />
        <div className="container">
          <div className="row">
            { this.props.projects.map((project, i) => 
              <ProjectItem key={project.projectTitle} project={project} isShown={this.state.showProjects[i]} index={i} handleClick={(index) => this.onHandleClick(index)} />
            )}
          </div>
        </div>
      </div>
    </Fragment>
    );
  }
}

ProjectsSection.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ProjectsSection;

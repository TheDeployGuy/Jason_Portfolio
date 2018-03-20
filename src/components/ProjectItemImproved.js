import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class ProjectItemImprovedC extends Component {

  state = {
    showDetails: false,
    defaultClass: 'col-4 mt-2'
  }

  handleClick = () => {
    let tempClasses = 'row mt-2'
    if(this.state.showDetails){
      tempClasses = 'col-4 mt-2'
    }

    this.setState({
      showDetails: !this.state.showDetails,
      defaultClass: tempClasses
    })
  }
  render() {
    const {
      project: {
        projectTitle,
        link,
        projectImg,
        projectDetail,
        projectDesc,
        projectTechnologies,
      },
    } = this.props;
    return (
      <Fragment>
        <div className={this.state.defaultClass}>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <a onClick={() => this.handleClick()}>
                <ProjectImg alt={projectTitle} src="http://via.placeholder.com/300x200" />
              </a>
            </div>
            {
              this.state.showDetails && (
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
  }
}
const ProjectItemImproved = ({
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
    <div className="col-4 mt-2">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-4">
          <a href={link}>
            <ProjectImg alt={projectTitle} src="http://via.placeholder.com/300x200" />
          </a>
        </div>
        <div style={{ display: 'none' }} className="col-md-12 col-lg-8">
          <h2>{projectTitle}</h2>
          <h4>{projectDesc}</h4>
          <hr />
          <h5>{projectDetail}</h5>
        </div>
      </div>
    </div>
  </Fragment>
);

export default ProjectItemImprovedC;

const ProjectImg = styled.img`
  height: 200px;
  width: 300px;
`;

ProjectItemImproved.propTypes = {
  project: PropTypes.shape({
    projectTitle: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    projectImg: PropTypes.string.isRequired,
    projectDetail: PropTypes.string.isRequired,
    projectDesc: PropTypes.string.isRequired,
    projectTechnologies: PropTypes.array.isRequired,
  }).isRequired,
};

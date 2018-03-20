import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class ProjectItemImproved extends Component {

  state = {
    showDetails: false,
    defaultClass: 'col-4 mt-2'
  }

  handleClick = () => {

    this.setState({
      showDetails: !this.state.showDetails
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

    let classes = ''
    if(this.state.showDetails){
      classes = 'row mt-2'
    }else{
      classes = this.state.defaultClass
    }

    return (
      <Fragment>
        <div className={classes}>
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

export default ProjectItemImproved;

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

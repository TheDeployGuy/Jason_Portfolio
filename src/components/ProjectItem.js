import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-md-4">
                <img alt={this.props.project.projectTitle} src={this.props.project.projectImg} className="circularImage" />
            </div>
            <div className="col-md-8 leftAlign">
                <h2>{this.props.project.projectTitle}</h2>
                <p>{this.props.project.projectDesc}</p>
            </div>
        </div>
    );
  }
}

export default ProjectItem;

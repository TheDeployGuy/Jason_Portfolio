import React, { Component } from 'react';

class ExperienceItem extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-md-4">
                <img alt={this.props.experience.experienceTitle} src={this.props.experience.experienceImg} className="circularImage" />
            </div>
            <div className="col-md-8">
                <h2>{this.props.experience.experienceTitle}</h2>
                <p>{this.props.experience.experienceDesc}</p>
            </div>
        </div>
    );
  }
}

export default ExperienceItem;
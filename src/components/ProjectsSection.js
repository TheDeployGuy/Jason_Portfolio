import React, { Component } from 'react';

class ProjectsSection extends Component {
  render() {
    return (
  <section>
    <div className="header-content" id="projects">
        <h1>Projects</h1>
        <hr/>
        <div className="row">
            <div className="col-md-4">
                <img alt="project1" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97200&w=200&h=200" className="circularImage" />
            </div>
            <div className="col-md-8 leftAlign">
                <h2>Project 1</h2>
                <p>Project Description</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-offset-4 col-md-4 rightAlign">
                <h2>Project 2</h2>
                <p>Project Description</p>
            </div>
            <div className="col-md-4">
                <img alt="project2" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97200&w=200&h=200" className="circularImage" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <img alt="project3" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97200&w=200&h=200" className="circularImage" />
            </div>
            <div className="col-md-8 leftAlign">
                <h2>Project 3</h2>
                <p>Project Description</p>
            </div>
        </div>
    </div>
  </section>
   )
  }
}

export default ProjectsSection;

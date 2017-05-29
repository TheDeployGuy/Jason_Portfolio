import React, { Component } from 'react';

class HeadSection extends Component {
  render() {
    return (
        <header id="HOME">
            <div className="header-content">
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                        <h1>My Portfolio</h1>
                        <hr className="headerHR" />
                        <p className="headerText">My name is Jason, I have been working for 3+ years as an Software Automation Engineer. I am also an inspiring Full stack developer mainly specializing in the MEAN stack. Here you will find personal projects and client projects.</p>
                        <a href="#CONTACT" className="btn btn-lg btn-info">Need a website?</a>
                        <a href="#" className="btn btn-lg btn-success">Hire me</a>
                        <div id="moveForward">
                            <p><small>My Projects</small></p>
                            <a href="#PROJECTS"><i id="downArrow" className="fa fa-chevron-circle-down fa-3x" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
  }
}

export default HeadSection;

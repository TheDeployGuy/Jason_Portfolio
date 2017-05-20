import React, { Component } from 'react';

class HeadSection extends Component {
  render() {
    return (
        <header id="HOME">
            <div className="header-content">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8">
                        <h1>My Portfolio</h1>
                        <hr className="headerHR" />
                        <img alt="profilePic" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/005/026/0f8/2a60dd4.jpg" className="roundImage img-circle" />
                        <p>My name is Jason, I have been working for 3+ years as an Automation Engineer. I am also an inspiring Full stack developer mainly specializing in the MEAN stack.Here you will find personal projects and client projects. If you think I would be a good fit for your project</p>
                        <button type="button" className="btn btn-lg btn-info">CONTACT</button>
                        
                        <button type="button" className="btn btn-lg btn-success">HIRE ME</button>
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

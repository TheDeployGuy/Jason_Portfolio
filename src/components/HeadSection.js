import React, { Component } from 'react';

class HeadSection extends Component {
  render() {
    return (
        <header id="HOME">
            <div className="header-content">
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                        <h1>My Portfolio</h1>
                        <hr />
                        <img alt="profilePic" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/005/026/0f8/2a60dd4.jpg" className="roundImage img-circle" />
                        <p>My name is Jason, I have been working for 3+ years as an Automation Engineer. In my spare time I am an inspiring Full stack developer mainly specializing in the MEAN stack. Here you will find personal projects and client projects. If you like what you see and think I would be a good fit for your project, Contact me!</p>
                        <a className="btn btn-default btn-lg btn-git" href="https://www.linkedin.com/in/jason-lloyd/" id="linkedinButton"><i className="fa fa-linkedin fa-2x"></i></a>
                        <a className="btn btn-default btn-lg btn-git" href="http://github.com/thedeployguy" id="githubButton"><i className="fa fa-github fa-2x"></i></a>
                        <a className="btn btn-default btn-lg btn-git" href="https://www.thedeployguy.com" id="website"><i className="fa fa-wpexplorer fa-2x"></i></a>
                        <div id="moveForward">
                            <p><small>See my projects</small></p>
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

import React from 'react';

function HeadSection() {
  return (
    <header id="HOME">
      <div className="header-content">
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <h1>My Portfolio</h1>
            <hr className="headerHR" />
            <p className="headerText">My name is Jason, I am currently working as a Senior Software Enginner at IBM building Full stack applications. In my spare time I have worked with clients creating projects with Angular 2/4, React and VueJS. Here you a find collection of personal and client projects.</p>
            <a href="https://www.dropbox.com/s/sddc03744slclv9/Jason%20Lloyd-CV.pdf?dl=0" className="btn btn-lg btn-success btn-outline">Hire me</a>
            <a href="#CONTACT" className="btn btn-lg btn-info btn-outline">Need a website?</a>
            <div id="moveForward">
              <a href="#PROJECTS"><i id="downArrow" role="link" className="fa fa-chevron-down fa-4x animated infinite rubberBand" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeadSection;

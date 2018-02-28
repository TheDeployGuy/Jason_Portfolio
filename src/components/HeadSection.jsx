import React from 'react';

function HeadSection() {
  return (
    <header id="HOME">
      <div className="header-content">
        <div className="row">
          <div className="m-auto col-md-6">
            <h1>My Portfolio</h1>
            <hr className="headerHR" />
            <img alt="profilePic" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAMAAQDGAAwAAQAAAAAAAAyaAAAAJGE0MmRlNDMzLTc0YTYtNDZlOS05MzQ5LWEzYmIxOTE4NmVhZg.jpg" className="roundImage img-circle" />
            <p className="headerText">
              My name is Jason, I am currently working as a Senior Software Enginner at IBM building Full stack applications. In my spare time I have worked with clients creating projects with Angular 2/4, React and VueJS. Here you a find collection of personal and client projects.
            </p>
            <a href="[insert_later]" target="_blank" className="btn btn-lg btn-success btn-outline">Hire me</a>
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

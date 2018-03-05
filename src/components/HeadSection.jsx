import React from 'react';

const HeadSection = () => (
  <div className="header-section">
    <div className="header-content">
      <div className="row justify-content-end">
        <div className="col-2">
          <a className="btn btn-default" href="mailto:jaslloyd57@gmail.com"><i className="fa fa-envelope fa-2x" /></a>
          <a className="btn btn-default" href="https://www.linkedin.com/in/jason-lloyd/"><i className="fa fa-linkedin fa-2x" /></a>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1>My Portfolio</h1>
          <hr className="hr--orange" />
          <img alt="profilePic" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAMAAQDGAAwAAQAAAAAAAAyaAAAAJGE0MmRlNDMzLTc0YTYtNDZlOS05MzQ5LWEzYmIxOTE4NmVhZg.jpg" className="img--profileimg--size" />
          <p className="mt-4">My name is Jason, I am currently working as a Senior Software Enginner at IBM building Full stack applications. I have worked with clients creating projects with Angular 2/4, React and VueJS. Here you a find collection of personal and client projects.</p>
          <a href="[insert_later]" target="_blank" className="btn btn-lg btn-success btn-outline-success mr-2">Hire me</a>
          <button data-toggle="modal" data-target="#myModal" className="btn btn-lg btn-info btn-outline-info">Need a website?</button>
          <div className="btn--downarrow--margin">
            {/* // eslint-disable-next-line */}
            <a href="#PROJECTS">
              <i role="link" className="fa fa-chevron-down fa-2x animated infinite rubberBand btn--downarrow--color" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeadSection;

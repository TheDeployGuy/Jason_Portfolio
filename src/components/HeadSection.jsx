import React from 'react';

const HeadSection = () => (
  <div className="header-section">
    <div className="header-content">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1>My Portfolio</h1>
          <hr className="hr--orange" />
          <img alt="profilePic" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAMAAQDGAAwAAQAAAAAAAAyaAAAAJGE0MmRlNDMzLTc0YTYtNDZlOS05MzQ5LWEzYmIxOTE4NmVhZg.jpg" className="img--profileimg--size" />
          <p>My name is Jason, I am currently working as a Senior Software Enginner at IBM building Full stack applications. I have worked with clients creating projects with Angular 2/4, React and VueJS. Here you a find collection of personal and client projects.</p>
          <a href="[insert_later]" target="_blank" className="btn btn-lg btn-success btn-outline-success mr-2">Hire me</a>
          <a href="#CONTACT" className="btn btn-lg btn-info btn-outline-info">Need a website?</a>
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

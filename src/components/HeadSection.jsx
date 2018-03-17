import React from 'react';
import styled from 'styled-components';

const HeadSection = () => (
  <HeaderSection>
    <div className="header-content">
      <div className="row justify-content-end">
        <div className="col-2">
          <a id="email-button" className="btn btn-default" href="mailto:jaslloyd57@gmail.com"><i className="fa fa-envelope fa-2x" /></a>
          <a id="linkedin-button" className="btn btn-default" href="https://www.linkedin.com/in/jason-lloyd/"><i className="fa fa-linkedin fa-2x" /></a>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1>My Portfolio</h1>
          <OrangeHR />
          <img alt="profilePic" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAMAAQDGAAwAAQAAAAAAAAyaAAAAJGE0MmRlNDMzLTc0YTYtNDZlOS05MzQ5LWEzYmIxOTE4NmVhZg.jpg" className="img--profileimg--size" />
          <p className="mt-4">My name is Jason, I am currently working as a Senior Software Enginner at IBM building Full stack applications. I have worked with clients creating projects with Angular 2+, React and VueJS. Here you a find collection of personal and client projects.</p>
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
  </HeaderSection>
);

const HeaderSection = styled.div`
  background: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,.7)), url(https://blackrockdigital.github.io/startbootstrap-creative/img/header.jpg) no-repeat center center;
  background-size: cover;
  background-position: center;
  color: #fff;
`;

const OrangeHR = styled.hr`
  border-color: #F05F40 !important;
  border-width: 3px;
  max-width: 50px;
`;

export default HeadSection;

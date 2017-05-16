import React, { Component } from 'react';
// import Navbar from './components/Navbar';
import HeadSection from './components/HeadSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {
          projectTitle: 'Zero Waste Shop Locator',
          projectImg: 'img/zw_store.png',
          projectDesc: 'Find stores that sell Zero Waste Products.',
          projectDetail: 'This was done for a client that wanted an easier way to for Zero Waste ententhusiasts to find stores that sell Zero waste products. At the time, enthusiasts were using Facebooks groups. The problem was when new people came, it was hard to find posts about places that sell Zero Waste Products.',
          link: 'https://www.zerowasteshops.com',
          projectTechnologies: 'Mongo, Expressjs, Angular 2, Nodejs'
        },
        {
          projectTitle: 'thedeployguy.com',
          projectImg: 'img/blog.png',
          projectDesc: 'Personal Blog',
          projectDetail: 'My personal blog that I post about technologies and subjects I find interesting. This is the best way for me to experience technologies I wouldn’t in my current role. It also helps me bring my experience with these technologies into my current role in the future.',
          link: 'https://www.thedeployguy.com',
          projectTechnologies: 'Wordpress'
        },
        {
          projectTitle: 'Game of Life Habit Tracker',
          projectImg: 'img/gol.png',
          projectDesc: 'Weekly Habit Tracker that focuses on building 3 habits at a time.',
          projectDetail: 'I am a huge user of Habit Trackers. I found [this post] on Lifehacker.com that inspired me to create this project. It is a Weekly Habit Tracker that focuses on building 3 habits at a time.',
          link: 'https://golhabittracking.herokuapp.com',
          projectTechnologies: 'HTML, Bootstrap, AngularJS, JQuery'
        }
      ],
      experiences: [
        {
          experienceTitle: 'Cloud Deployment and Operations Automation Engineer - Devops',
          experienceImg: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97200&w=200&h=200',
          experienceDesc: 'I am part of the SmartCloud Team for Social Business. I am working as a Cloud Deployment and Operations Automation Engineer(DevOps)'
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <HeadSection />
        <ProjectsSection projects={this.state.projects} />
        {/*<ExperienceSection />*/}
        <ContactSection />
      </div>
    );
  }
}

export default App;

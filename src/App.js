//
import React, { Component } from 'react';
import HeadSection from './components/HeadSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          projectTitle: 'Zero Waste Shop Locator',
          projectImg: 'img/zw_store_inpc.png',
          projectDesc: 'Find stores that sell Zero Waste Products.',
          projectDetail: 'This was done for a client that wanted an easier way to for Zero Waste ententhusiasts to find stores that sell Zero waste products. At the time, enthusiasts were using Facebooks groups. The problem was when new people came, it was hard to find posts about places that sell Zero Waste Products.',
          link: 'https://www.zerowasteshops.com',
          projectTechnologies: 'Mongo, Expressjs, Angular 2, Nodejs',
          projectTechnologiesImgLinks: ['img/mongo_db.jpeg', 'img/expressjs.png', 'img/angular_2.jpg', 'img/nodejs_2.png', 'img/gmaps.png'],
        },
        {
          projectTitle: 'thedeployguy.com',
          projectImg: 'img/blog.png',
          projectDesc: 'Personal Blog',
          projectDetail: 'My personal blog that I post about technologies and subjects I find interesting. This is the best way for me to experience technologies I wouldn’t in my current role. It also helps me bring my experience with these technologies into my current role in the future.',
          link: 'https://www.thedeployguy.com',
          projectTechnologies: 'Wordpress',
          projectTechnologiesImgLinks: ['img/wordpress.png'],
        },
        {
          projectTitle: 'Game of Life Habit Tracker',
          projectImg: 'img/gol.png',
          projectDesc: 'Weekly Habit Tracker that focuses on building 3 habits at a time.',
          projectDetail: 'I am a huge user of Habit Trackers. I found [this post] on Lifehacker.com that inspired me to create this project. It is a Weekly Habit Tracker that focuses on building 3 habits at a time.',
          link: 'https://golhabittracking.herokuapp.com',
          projectTechnologies: 'HTML, Bootstrap, AngularJS, JQuery',
          projectTechnologiesImgLinks: ['img/html5.png', 'img/bootstrap.png', 'img/angular_2.jpg', 'img/jquery.png'],
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <HeadSection />
        <ProjectsSection projects={this.state.projects} />
        <ContactSection />
      </div>
    );
  }
}

export default App;

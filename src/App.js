import React, { Component } from 'react';
import HeadSection from './components/HeadSection';
import ProjectsSection from './components/ProjectsSection';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

class App extends Component {
  state = {
    projects: [
      {
        projectTitle: 'Oakcourt Counselling',
        projectImg: 'http://via.placeholder.com/300x200',
        projectDesc: 'Counselling information and appointment site',
        projectDetail: 'This was done for a client that wanted a way for clients to find her counselling services. It also allows users to send a message to book an appointment.',
        link: 'https://www.oakcourtcounselling.ie',
        projectTechnologies: ['Expressjs', 'Nodejs', 'JQuery', 'Bootstrap 4']
      },
      {
        projectTitle: 'Zero Waste Shop Locator',
        projectImg: 'zero_waste.png',
        projectDesc: 'Find stores that are selling Zero Waste Products',
        projectDetail: 'This was done for a client that wanted an easier way for Zero Waste ententhusiasts to find stores that sell Zero waste products. At the time, enthusiasts were using Facebooks groups. The problem was when new people were added, it was hard to find posts about places that sell Zero Waste Products.',
        link: 'https://www.zerowasteshops.com',
        projectTechnologies: ['Mongo', 'Expressjs', 'Angular 4', 'Nodejs']
      },
      {
        projectTitle: 'thedeployguy.com',
        projectImg: 'http://via.placeholder.com/300x200',
        projectDesc: 'Personal Blog',
        projectDetail: 'My personal blog that I post about technologies and subjects I find interesting. This is the best way for me to experience technologies I wouldn’t in my current role. It also helps me bring my experience with these technologies into my role in the future.',
        link: 'https://www.thedeployguy.com',
        projectTechnologies: ['Wordpress']
      },
      {
        projectTitle: 'Game of Life Habit Tracker',
        projectImg: 'http://via.placeholder.com/300x200',
        projectDesc: 'Habit Tracker that focuses on building 3 habits',
        projectDetail: 'I am a huge user of Habit Trackers. I found a post on Lifehacker.com that inspired me to create this project. It is a Weekly Habit Tracker that focuses on building 3 habits.',
        link: 'https://golhabittracking.herokuapp.com',
        projectTechnologies: ['HTML', 'Bootstrap', 'AngularJS', 'JQuery']
      },
    ],
  }

  handleContactQuery = (query) => {
    console.log('in app.js');
    console.log(query);

    // Send query in email here or submit it to backend that doesn't exist
  }

  render() {
    return (
      <div className="App">
        <HeadSection />
        <ProjectsSection projects={this.state.projects} />
        <ContactModal sendContactQuery={this.handleContactQuery} />
        <Footer />
      </div>
    );
  }
}

export default App;

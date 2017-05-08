import React, { Component } from 'react';
import Navbar from './components/Navbar';
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
          projectTitle: 'p1',
          projectImg: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97200&w=200&h=200',
          projectDesc: 'desc1'
        },
        {
          projectTitle: 'p2',
          projectImg: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97200&w=200&h=200',
          projectDesc: 'desc2'
        },
        {
          projectTitle: 'p3',
          projectImg: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97200&w=200&h=200',
          projectDesc: 'desc3'
        }
      ],
      experiences: [
        {
          experienceTitle: 'Cloud Deployment and Operations Automation Engineer - Devops',
          experienceImg: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97200&w=200&h=200',
          experienceDesc: 'I am part of the SmartCloud Team for Social Business. I am working as a Cloud Deployment and Operations Automation Engineer(DevOps)'
        },
        {
          experienceTitle: 'p3',
          experienceImg: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97200&w=200&h=200',
          experienceDesc: 'desc3'
        },
        {
          experienceTitle: 'p3',
          experienceImg: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97200&w=200&h=200',
          experienceDesc: 'desc3'
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <HeadSection />
        <ExperienceSection />
        <ProjectsSection projects={this.state.projects} />
        <ContactSection />
      </div>
    );
  }
}

export default App;

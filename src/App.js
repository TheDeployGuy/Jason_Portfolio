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
      navbarItems: ['HOME', 'PROJECTS', 'EXPERIENCES', 'CONTACT'],
      currentActiveTab: 'home',
      projects: [
        {
          projectTitle: 'Zero Waste Shop Locator',
          projectImg: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97200&w=200&h=200',
          projectDesc: 'desc1'
        },
        {
          projectTitle: 'thedeployguy.com - Personal Blog',
          projectImg: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97200&w=200&h=200',
          projectDesc: 'My personal blog that I post about technologies and subjects I find interesting. This is the best way for me to experience technologies I wouldn’t in my current role. It also helps me bring my experience with these technologies into my current role in the future.'
        },
        {
          projectTitle: 'Game of Life Habit Tracker',
          projectImg: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97200&w=200&h=200',
          projectDesc: 'Weekly Habit Tracker that focuses on building 3 habits at a time.'
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
  handleMenuClick(menuItemClicked){
    this.setState({currentActiveTab: menuItemClicked});
  }

  render() {
    return (
      <div className="App">
        <Navbar navbarItems={this.state.navbarItems} activeTab={this.state.currentActiveTab} onMenuClick={() => this.handleMenuClick()} />
        <HeadSection />
        <ProjectsSection projects={this.state.projects} />
        <ExperienceSection />
        <ContactSection />
      </div>
    );
  }
}

export default App;

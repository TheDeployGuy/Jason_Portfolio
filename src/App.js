import React, { Component } from 'react';
import Navbar from './components/Navbar';
import HeadSection from './components/HeadSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <HeadSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    );
  }
}

export default App;
